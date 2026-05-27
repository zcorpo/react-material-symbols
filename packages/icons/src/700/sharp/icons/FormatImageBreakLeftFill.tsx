import type { SVGProps } from 'react'

export default function FormatImageBreakLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-93h771v93H95Zm0-168v-434h433v434H95Zm0-509v-94h771v94H95Z" />
    </svg>
  )
}
