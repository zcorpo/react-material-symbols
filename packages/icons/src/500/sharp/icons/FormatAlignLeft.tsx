import type { SVGProps } from 'react'

export default function FormatAlignLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-66.46h732.2v66.46h-732.2Zm0-166.44v-66.45h492.2v66.45h-492.2Zm0-166.43v-66.46h732.2v66.46h-732.2Zm0-166.44v-66.45h492.2v66.45h-492.2Zm0-166.43v-66.46h732.2v66.46h-732.2Z" />
    </svg>
  )
}
