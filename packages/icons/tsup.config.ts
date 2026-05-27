import { existsSync } from 'fs'
import { defineConfig } from 'tsup'

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700']
const STYLES = ['outlined', 'rounded', 'sharp']

function makeCombo(w: string, s: string) {
  return defineConfig({
    entry: [
      `src/${w}/${s}/index.ts`,
      `src/${w}/${s}/icons/*.tsx`,
    ],
    outDir: `dist/${w}/${s}`,
    bundle: false,
    format: ['esm', 'cjs'],
    dts: true,
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

const single = process.env.BUILD_COMBO
const config = single
  ? (() => {
      const parsed = parseBuildCombo(single)
      if (!parsed) {
        console.error(`Invalid BUILD_COMBO (expected weight/style): ${single}`)
        process.exit(1)
      }
      return makeCombo(parsed.weight, parsed.style)
    })()
  : (() => {
      const all = WEIGHTS.flatMap((w) =>
        STYLES.flatMap((s) => (existsSync(`src/${w}/${s}/index.ts`) ? [makeCombo(w, s)] : [])),
      )
      if (all.length === 0) {
        console.error('No icon sets found in src/. Run: pnpm sync')
        process.exit(1)
      }
      return all
    })()

export default config
