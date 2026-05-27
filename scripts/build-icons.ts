import { execSync } from 'child_process'
import { existsSync, rmSync } from 'fs'
import path from 'path'

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700'] as const
const STYLES = ['outlined', 'rounded', 'sharp'] as const

const PKG_DIR = path.join(__dirname, '../packages/icons')
const TSUP = path.join(PKG_DIR, 'node_modules/.bin/tsup')

// Strip tsx's injected NODE_PATH so it doesn't leak its loader into tsup's child process
const { NODE_PATH: _nodePath, ...cleanEnv } = process.env

rmSync(path.join(PKG_DIR, 'dist'), { recursive: true, force: true })
console.log('Cleaned dist/\n')

let built = 0
for (const w of WEIGHTS) {
  for (const s of STYLES) {
    if (!existsSync(path.join(PKG_DIR, 'src', w, s, 'index.ts'))) continue
    console.log(`Building ${w}/${s}…`)
    execSync(TSUP, {
      cwd: PKG_DIR,
      stdio: 'inherit',
      env: { ...cleanEnv, NODE_OPTIONS: '--max-old-space-size=8192', BUILD_COMBO: `${w}/${s}` },
    })
    built++
  }
}

console.log(`\nBuilt ${built} combination(s).`)
