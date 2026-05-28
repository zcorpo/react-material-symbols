import type { SVGProps, JSX } from 'react'

export default function BarChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M654.61-180v-236.15H780V-180H654.61Zm-237.3 0v-600h125.38v600H417.31ZM180-180v-403.84h125.39V-180H180Z" />
    </svg>
  )
}
