import { promises as fs } from 'fs'
import path from 'path'

const ICONS_PKG = path.join(__dirname, '../packages/icons')
const SRC_DIR = path.join(ICONS_PKG, 'src')
const DIST_DIR = path.join(ICONS_PKG, 'dist')

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700']
const STYLES = ['outlined', 'rounded', 'sharp']

function parseName(line: string): string | null {
  const m = line.match(/export\s*\{\s*default\s+as\s+(\w+)\s*\}/)
  return m ? m[1] : null
}

function buildBundledDts(names: string[]): string {
  const decls = names
    .map(
      (n) =>
        `declare function ${n}({ size, ...props }: import('react').SVGProps<SVGSVGElement> & { size?: number }): import('react').JSX.Element;`,
    )
    .join('\n')
  return `${decls}\nexport { ${names.join(', ')} };\n`
}

async function generateCombo(w: string, s: string): Promise<void> {
  const srcIndex = path.join(SRC_DIR, w, s, 'index.ts')
  const distDir = path.join(DIST_DIR, w, s)

  const barrel = await fs.readFile(srcIndex, 'utf-8')
  const names = barrel
    .split('\n')
    .map(parseName)
    .filter((n): n is string => n !== null)

  const dts = buildBundledDts(names)

  await Promise.all([
    fs.writeFile(path.join(distDir, 'index.d.ts'), dts),
    fs.writeFile(path.join(distDir, 'index.d.mts'), dts),
  ])

  console.log(`DTS  ${w}/${s}  (${names.length} exports)`)
}

async function main() {
  for (const w of WEIGHTS) {
    for (const s of STYLES) {
      const srcIndex = path.join(SRC_DIR, w, s, 'index.ts')
      const distDir = path.join(DIST_DIR, w, s)
      const exists =
        (await fs.access(srcIndex).then(() => true).catch(() => false)) &&
        (await fs.access(distDir).then(() => true).catch(() => false))
      if (!exists) continue
      await generateCombo(w, s)
    }
  }
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
