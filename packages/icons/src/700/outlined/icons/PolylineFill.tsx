import type { SVGProps } from 'react'

export default function PolylineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M609-57v-111L319-313H86v-266h220l103-115v-221h266v266H479L351-504v116.2L609-261v-62h266v266H609Z" />
    </svg>
  )
}
