import type { SVGProps, JSX } from 'react'

export default function GroupedBarChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-180v-445.77h125.39V-180H180Zm195 0v-253.08h125.38V-180H375Zm279.61 0v-600H780v600H654.61Z" />
    </svg>
  )
}
