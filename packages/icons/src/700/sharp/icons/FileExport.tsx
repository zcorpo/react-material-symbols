import type { SVGProps, JSX } from 'react'

export default function FileExport({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-480ZM204-54l-66-68 111-111H131v-94h278v278h-94v-117L204-54Zm265-1v-94h262v-442H511v-220H229v424h-94v-519h436l255 255.3V-55H469Z" />
    </svg>
  )
}
