import type { SVGProps, JSX } from 'react'

export default function Landscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m139-292 146-196 130.5 174H777L565-596 432-418l-15-19 148-197 256 342H139Zm371-22Zm-327 0h205L285-452 183-314Zm0 0h205-205Z" />
    </svg>
  )
}
