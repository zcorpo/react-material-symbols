import type { SVGProps, JSX } from 'react'

export default function LineStartArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M496.15-243.46 124.23-480l371.92-236.54v213.85h362.31v45.38H496.15v213.85Z" />
    </svg>
  )
}
