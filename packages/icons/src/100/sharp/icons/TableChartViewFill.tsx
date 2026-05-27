import type { SVGProps } from 'react'

export default function TableChartViewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m294-118-16-16 238-238 140 140 209-209 16 16-225 225-140-140-222 222Zm-108-54h-54v-622h616v231H154v369h32v22Z" />
    </svg>
  )
}
