import type { SVGProps } from 'react'

export default function CandlestickChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M255-135v-90h-86v-511h86v-90h94v90h86v511h-86v90h-94Zm356 0v-210h-86v-311h86v-170h95v170h86v311h-86v210h-95Z" />
    </svg>
  )
}
