import type { SVGProps, JSX } from 'react'

export default function ComputerCancel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m363-381.77 117-117 117 117 32-32-117-117 117-117-32-32-117 117-117-117-32 32 117 117-117 117 32 32Zm-307.61 231v-45.39h849.22v45.39H55.39Zm44.61-100v-560h760v560H100Zm45.39-45.38h669.22v-469.23H145.39v469.23Zm0 0v-469.23 469.23Z" />
    </svg>
  )
}
