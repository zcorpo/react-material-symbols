import type { SVGProps } from 'react'

export default function FormatImageBreakRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-772v-94h771v94H95Zm337 509v-434h434v434H432ZM95-95v-93h771v93H95Z" />
    </svg>
  )
}
