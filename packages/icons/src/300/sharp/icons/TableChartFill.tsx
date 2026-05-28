import type { SVGProps, JSX } from 'react'

export default function TableChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-629.38V-820h680v190.62H140Zm0 488.76V-584h175v443.38H140Zm505 0V-584h175v443.38H645Zm-284.62 0V-584h239.24v443.38H360.38Z" />
    </svg>
  )
}
