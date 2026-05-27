import type { SVGProps } from 'react'

export default function FormatImageBreakLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-93h771v93H95Zm0-168v-434h433v434H95Zm94-95h245v-244H189v244ZM95-772v-94h771v94H95Zm216 292Z" />
    </svg>
  )
}
