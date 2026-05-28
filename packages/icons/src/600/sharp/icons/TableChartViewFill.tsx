import type { SVGProps, JSX } from 'react'

export default function TableChartViewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M289-72.87 232.87-129 516-412.57l140 140 215-214L926.57-431 656-159.87l-140-140-227 227Zm-143.91-33H65.87V-874.7H814.7v308.09H145.09v460.74Z" />
    </svg>
  )
}
