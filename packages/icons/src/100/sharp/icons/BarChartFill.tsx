import type { SVGProps } from 'react'

export default function BarChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M646-212v-166h102v166H646Zm-217 0v-536h102v536H429Zm-217 0v-346h102v346H212Z" />
    </svg>
  )
}
