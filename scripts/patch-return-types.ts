import { promises as fs } from 'fs'
import path from 'path'

const SRC_DIR = path.join(__dirname, '../packages/icons/src')
const CONCURRENCY = 50

async function* walkTsx(dir: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walkTsx(full)
    else if (entry.name.endsWith('.tsx')) yield full
  }
}

async function patchFile(filePath: string): Promise<boolean> {
  const content = await fs.readFile(filePath, 'utf-8')
  if (content.includes('): JSX.Element {')) return false

  const patched = content
    .replace(
      "import type { SVGProps } from 'react'",
      "import type { SVGProps, JSX } from 'react'",
    )
    .replace(
      /\}: SVGProps<SVGSVGElement> & \{ size\?: number \}\) \{/,
      '}: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {',
    )

  if (patched === content) return false
  await fs.writeFile(filePath, patched)
  return true
}

async function main() {
  const files: string[] = []
  for await (const f of walkTsx(SRC_DIR)) files.push(f)

  console.log(`Found ${files.length} .tsx files — patching…`)

  let patched = 0
  let cursor = 0

  async function worker() {
    while (cursor < files.length) {
      const i = cursor++
      if (await patchFile(files[i])) patched++
      if ((i + 1) % 10000 === 0) console.log(`  ${i + 1}/${files.length}…`)
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker))
  console.log(`Done. Patched ${patched}/${files.length} files.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
