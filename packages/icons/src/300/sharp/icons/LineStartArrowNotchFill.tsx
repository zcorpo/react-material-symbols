import type { SVGProps, JSX } from 'react'

export default function LineStartArrowNotchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M496.15-243.46 124.23-480l371.92-236.54-128.38 213.85h494.92v45.38H367.77l128.38 213.85Z" />
    </svg>
  )
}
