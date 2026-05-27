import type { SVGProps } from 'react'

export default function ViewTimelineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm155-189h220v-60H250v60Zm240-333h220v-60H490v60ZM370-450h220v-60H370v60Z" />
    </svg>
  )
}
