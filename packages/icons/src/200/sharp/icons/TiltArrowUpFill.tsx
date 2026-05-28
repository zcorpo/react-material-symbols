import type { SVGProps, JSX } from 'react'

export default function TiltArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m120-160 144.62-640h430L840-160H120Zm343.85-381.62v215.47h30.77v-215.47L584-452.23l22-22-126.77-126L354-475.77l22 22 87.85-87.85Z" />
    </svg>
  )
}
