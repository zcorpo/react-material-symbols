import { promises as fs } from 'fs'
import path from 'path'

const ICONS_PKG = path.join(__dirname, '../packages/icons')
const SRC_DIR = path.join(ICONS_PKG, 'src')
const DIST_DIR = path.join(ICONS_PKG, 'dist')

const WEIGHTS = ['100', '200', '300', '400', '500', '600', '700']
const STYLES = ['outlined', 'rounded', 'sharp']

function componentDts(name: string): string {
  return `import type { SVGProps, JSX } from 'react';
declare function ${name}({ size, ...props }: SVGProps<SVGSVGElement> & {
    size?: number;
}): JSX.Element;
export default ${name};
`
}

async function generateCombo(w: string, s: string): Promise<void> {
  const srcIndex = path.join(SRC_DIR, w, s, 'index.ts')
  const distDir = path.join(DIST_DIR, w, s)
  const distIconsDir = path.join(distDir, 'icons')

  const barrel = await fs.readFile(srcIndex, 'utf-8')

  const builtFiles = (await fs.readdir(distIconsDir)).filter((f) => f.endsWith('.js'))

  await Promise.all(
    builtFiles.map((f) => {
      const name = f.slice(0, -3)
      const dts = componentDts(name)
      return Promise.all([
        fs.writeFile(path.join(distIconsDir, `${name}.d.ts`), dts),
        fs.writeFile(path.join(distIconsDir, `${name}.d.mts`), dts),
      ])
    }),
  )
  
  await Promise.all([
    fs.writeFile(path.join(distDir, 'index.d.ts'), barrel),
    fs.writeFile(path.join(distDir, 'index.d.mts'), barrel),
  ])

  console.log(`DTS  ${w}/${s}  (${builtFiles.length} icons)`)
}

async function main() {
  for (const w of WEIGHTS) {
    for (const s of STYLES) {
      const srcIndex = path.join(SRC_DIR, w, s, 'index.ts')
      const distIconsDir = path.join(DIST_DIR, w, s, 'icons')
      const exists =
        (await fs.access(srcIndex).then(() => true).catch(() => false)) &&
        (await fs.access(distIconsDir).then(() => true).catch(() => false))
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
