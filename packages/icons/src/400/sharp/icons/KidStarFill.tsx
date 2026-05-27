import type { SVGProps } from 'react'

export default function KidStarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m307-701 173-225 173 225 270 91-170 243 6 270-279-78-279 78 6-271L38-610l269-91Z" />
    </svg>
  )
}
