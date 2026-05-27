import { promises as fs } from 'fs'
import path from 'path'

// ─── constants ─────────────────────────────────────────────────────────────

const REPO = 'marella/material-symbols'
const BASE_RAW = `https://raw.githubusercontent.com/${REPO}/main/svg`
const ICONS_PKG = path.join(__dirname, '../packages/icons')
const SRC_DIR = path.join(ICONS_PKG, 'src')

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700'] as const
const STYLES = ['outlined', 'rounded', 'sharp'] as const
type Weight = (typeof WEIGHTS)[number]
type Style = (typeof STYLES)[number]

const GITHUB_HEADERS: HeadersInit = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
}

// ─── cli args ──────────────────────────────────────────────────────────────

const argv = process.argv.slice(2)
const getFlag = (name: string) => argv.find((a) => a.startsWith(`--${name}=`))?.split('=')[1]

const weightArg = getFlag('weight')
const styleArg = getFlag('style')

const targetWeights: Weight[] = weightArg
  ? (weightArg.split(',').filter((w) => (WEIGHTS as readonly string[]).includes(w)) as Weight[])
  : [...WEIGHTS]
const targetStyles: Style[] = styleArg
  ? (styleArg.split(',').filter((s) => (STYLES as readonly string[]).includes(s)) as Style[])
  : [...STYLES]
const force = argv.includes('--force')

// ─── github helpers ────────────────────────────────────────────────────────

interface GHTreeItem {
  path: string
  type: 'blob' | 'tree'
  sha: string
}
interface GHTreeResp {
  tree: GHTreeItem[]
  truncated?: boolean
}
interface GHBranch {
  commit: { commit: { tree: { sha: string } } }
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: GITHUB_HEADERS })
  if (!res.ok) throw new Error(`GET ${url} → ${res.status} ${res.statusText}`)
  return res.json() as Promise<T>
}

async function fetchText(url: string, retries = 3): Promise<string> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const res = await fetch(url)
    if (res.ok) return res.text()
    if (attempt < retries - 1) await new Promise((r) => setTimeout(r, 800 * (attempt + 1)))
  }
  throw new Error(`Failed to fetch ${url}`)
}

// SHA cache so we don't re-fetch the same tree node twice
const treeCache = new Map<string, GHTreeItem[]>()
async function getTree(sha: string): Promise<GHTreeItem[]> {
  if (treeCache.has(sha)) return treeCache.get(sha)!
  const data = await fetchJson<GHTreeResp>(
    `https://api.github.com/repos/${REPO}/git/trees/${sha}`,
  )
  treeCache.set(sha, data.tree)
  return data.tree
}

function findSubdir(items: GHTreeItem[], name: string): GHTreeItem {
  const item = items.find((t) => t.type === 'tree' && t.path === name)
  if (!item) throw new Error(`Directory "${name}" not found in tree`)
  return item
}

// ─── svg helpers ───────────────────────────────────────────────────────────

function toComponentName(iconName: string): string {
  const pascal = iconName
    .split(/[_-]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
  return /^\d/.test(pascal) ? `Icon${pascal}` : pascal
}

function extractPaths(svg: string): string[] {
  const paths: string[] = []
  const re = /<path\b[^>]*\bd="([^"]+)"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(svg)) !== null) paths.push(m[1])
  return paths
}

function buildComponent(componentName: string, paths: string[]): string {
  const pathsJsx =
    paths.length === 1
      ? `      <path d="${paths[0]}" />`
      : paths.map((d) => `      <path d="${d}" />`).join('\n')

  return `import type { SVGProps } from 'react'

export default function ${componentName}({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
${pathsJsx}
    </svg>
  )
}
`
}

// ─── concurrency ───────────────────────────────────────────────────────────

async function concurrentMap<T, R>(
  items: T[],
  fn: (item: T, index: number) => Promise<R>,
  concurrency: number,
): Promise<R[]> {
  const results = new Array<R>(items.length)
  let cursor = 0
  async function worker() {
    while (cursor < items.length) {
      const i = cursor++
      results[i] = await fn(items[i], i)
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker))
  return results
}

// ─── sync one weight/style combination ─────────────────────────────────────

async function syncCombination(
  weight: Weight,
  style: Style,
  styleTreeItems: GHTreeItem[],
): Promise<void> {
  const iconNames = styleTreeItems
    .filter((t) => t.type === 'blob' && t.path.endsWith('.svg'))
    .map((t) => path.basename(t.path, '.svg'))

  const iconsDir = path.join(SRC_DIR, weight, style, 'icons')
  const indexPath = path.join(SRC_DIR, weight, style, 'index.ts')
  await fs.mkdir(iconsDir, { recursive: true })

  let done = 0
  const failed: string[] = []

  const icons = await concurrentMap(
    iconNames,
    async (name) => {
      try {
        const svg = await fetchText(`${BASE_RAW}/${weight}/${style}/${name}.svg`)
        const paths = extractPaths(svg)
        if (paths.length === 0) throw new Error('No <path> found')
        return { name, componentName: toComponentName(name), paths }
      } catch (err) {
        failed.push(name)
        return null
      } finally {
        done++
        if (done % 500 === 0 || done === iconNames.length) {
          console.log(`    ${done}/${iconNames.length}`)
        }
      }
    },
    20,
  )

  const valid = icons.filter(Boolean) as { name: string; componentName: string; paths: string[] }[]

  await Promise.all(
    valid.map(({ componentName, paths }) =>
      fs.writeFile(path.join(iconsDir, `${componentName}.tsx`), buildComponent(componentName, paths)),
    ),
  )

  valid.sort((a, b) => a.componentName.localeCompare(b.componentName))

  const barrel =
    valid
      .map(({ componentName }) => `export { default as ${componentName} } from './icons/${componentName}'`)
      .join('\n') + '\n'

  await fs.writeFile(indexPath, barrel)

  if (failed.length) console.warn(`    Skipped: ${failed.join(', ')}`)
}

// ─── package.json exports updater ──────────────────────────────────────────

async function updatePackageJson(): Promise<void> {
  const pkgPath = path.join(ICONS_PKG, 'package.json')
  const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'))

  const exports: Record<string, unknown> = {}
  let firstWeight: Weight | null = null
  let firstStyle: Style | null = null

  for (const w of WEIGHTS) {
    for (const s of STYLES) {
      const indexPath = path.join(SRC_DIR, w, s, 'index.ts')
      const exists = await fs.access(indexPath).then(() => true).catch(() => false)
      if (!exists) continue
      if (!firstWeight) { firstWeight = w; firstStyle = s }
      exports[`./${w}/${s}`] = {
        import: {
          types: `./dist/${w}/${s}/index.d.mts`,
          default: `./dist/${w}/${s}/index.mjs`,
        },
        require: {
          types: `./dist/${w}/${s}/index.d.ts`,
          default: `./dist/${w}/${s}/index.js`,
        },
      }
    }
  }

  pkg.exports = exports

  // Prefer 400/rounded as the legacy main/module/types default, fall back to first found
  const defaultCombo: [Weight, Style] =
    exports['./400/rounded'] ? ['400', 'rounded'] :
    firstWeight ? [firstWeight, firstStyle!] : ['400', 'rounded']
  const [dw, ds] = defaultCombo
  pkg.main = `./dist/${dw}/${ds}/index.js`
  pkg.module = `./dist/${dw}/${ds}/index.mjs`
  pkg.types = `./dist/${dw}/${ds}/index.d.ts`

  await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  console.log(`Updated package.json exports (${Object.keys(exports).length} entries)`)
}

// ─── main ──────────────────────────────────────────────────────────────────

async function main() {
  const combinations: [Weight, Style][] = []
  for (const w of targetWeights) for (const s of targetStyles) combinations.push([w, s])

  console.log(`Syncing ${combinations.length} combination(s): ${combinations.map(([w, s]) => `${w}/${s}`).join(', ')}\n`)

  // Resolve tree SHAs: root → svg, then per weight → per style
  process.stdout.write('Resolving tree structure…')
  const branch = await fetchJson<GHBranch>(`https://api.github.com/repos/${REPO}/branches/main`)
  const rootTree = await getTree(branch.commit.commit.tree.sha)
  const svgTree = await getTree(findSubdir(rootTree, 'svg').sha)
  process.stdout.write(' done\n\n')

  // Pre-fetch weight trees in parallel (they're cached for style lookups below)
  const weightItems = svgTree.filter(
    (t) => t.type === 'tree' && (targetWeights as string[]).includes(t.path),
  )
  await Promise.all(weightItems.map((t) => getTree(t.sha)))

  for (const [weight, style] of combinations) {
    const weightEntry = svgTree.find((t) => t.path === weight && t.type === 'tree')
    if (!weightEntry) { console.warn(`  weight ${weight} not found — skipping`); continue }

    const weightTree = await getTree(weightEntry.sha)
    const styleEntry = weightTree.find((t) => t.path === style && t.type === 'tree')
    if (!styleEntry) { console.warn(`  ${weight}/${style} not found — skipping`); continue }

    const indexPath = path.join(SRC_DIR, weight, style, 'index.ts')
    const alreadySynced = !force && await fs.access(indexPath).then(() => true).catch(() => false)
    if (alreadySynced) {
      console.log(`  ${weight}/${style}  already synced — skipping (--force to re-sync)`)
      continue
    }

    const styleTree = await getTree(styleEntry.sha)
    const iconCount = styleTree.filter((t) => t.type === 'blob' && t.path.endsWith('.svg')).length

    console.log(`  ${weight}/${style}  (${iconCount} icons)`)
    await syncCombination(weight, style, styleTree)
  }

  console.log('\nUpdating package.json…')
  await updatePackageJson()
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
