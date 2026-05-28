import type { SVGProps, JSX } from 'react'

export default function KeyboardArrowDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-371.69 267.69-584l22.23-22.23L480-416.15l190.08-190.08L692.31-584 480-371.69Z" />
    </svg>
  )
}
