import { existsSync } from 'fs'
import { defineConfig } from 'tsup'

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700']
const STYLES = ['outlined', 'rounded', 'sharp']

function makeCombo(w: string, s: string) {
  return defineConfig({
    entry: [`src/${w}/${s}/index.ts`],
    outDir: `dist/${w}/${s}`,
    bundle: true,
    format: ['esm', 'cjs'],
    dts: false,
    external: ['react', 'react/jsx-runtime'],
    clean: false,
    sourcemap: false,
  })
}

function makeWeight(w: string) {
  return defineConfig({
    entry: [`src/${w}/index.ts`],
    outDir: `dist/${w}`,
    bundle: false,
    format: ['esm', 'cjs'],
    dts: false,
    external: ['react', 'react/jsx-runtime'],
    clean: false,
    sourcemap: false,
  })
}

function parseBuildCombo(combo: string): { weight: string; style: string } | null {
  const slash = combo.indexOf('/')
  if (slash <= 0 || slash === combo.length - 1) return null
  if (combo.indexOf('/', slash + 1) !== -1) return null
  return { weight: combo.slice(0, slash), style: combo.slice(slash + 1) }
}

const buildCombo = process.env.BUILD_COMBO
const buildWeight = process.env.BUILD_WEIGHT

const config = buildCombo
  ? (() => {
      const parsed = parseBuildCombo(buildCombo)
      if (!parsed) {
        console.error(`Invalid BUILD_COMBO (expected weight/style): ${buildCombo}`)
        process.exit(1)
      }
      return makeCombo(parsed.weight, parsed.style)
    })()
  : buildWeight
  ? (() => {
      if (!WEIGHTS.includes(buildWeight)) {
        console.error(`Invalid BUILD_WEIGHT (expected one of ${WEIGHTS.join(', ')}): ${buildWeight}`)
        process.exit(1)
      }
      return makeWeight(buildWeight)
    })()
  : (() => {
      const combos = WEIGHTS.flatMap((w) =>
        STYLES.flatMap((s) => (existsSync(`src/${w}/${s}/index.ts`) ? [makeCombo(w, s)] : [])),
      )
      const weights = WEIGHTS.filter((w) => existsSync(`src/${w}/index.ts`)).map(makeWeight)
      const all = [...combos, ...weights]
      if (all.length === 0) {
        console.error('No icon sets found in src/. Run: pnpm sync')
        process.exit(1)
      }
      return all
    })()

export default config
