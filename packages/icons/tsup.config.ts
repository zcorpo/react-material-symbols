import { existsSync } from 'fs'
import { defineConfig } from 'tsup'

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700']
const STYLES = ['outlined', 'rounded', 'sharp']

function makeCombo(w: string, s: string) {
  return defineConfig({
    entry: { [`${w}/${s}/index`]: `src/${w}/${s}/index.ts` },
    format: ['esm', 'cjs'],
    dts: true,
    treeshake: true,
    external: ['react', 'react/jsx-runtime'],
    clean: false,
    sourcemap: false,
  })
}

// BUILD_COMBO env var: build a single combination (used by scripts/build-icons.ts).
// No env var: build all synced combinations in parallel (direct `pnpm build` usage).
const single = process.env.BUILD_COMBO
const config = single
  ? makeCombo(...(single.split('/') as [string, string]))
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
