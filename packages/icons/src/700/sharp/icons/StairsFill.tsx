import type { SVGProps, JSX } from 'react'

export default function StairsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-250h157v-133h103v-133h103v-134h97v-60H553v133H450v133H347v134h-97v60ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
