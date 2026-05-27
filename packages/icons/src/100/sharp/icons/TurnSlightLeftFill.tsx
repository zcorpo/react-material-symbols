import type { SVGProps, JSX } from 'react'

export default function TurnSlightLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M552-172v-287L299-711v139h-22v-176h176v22H314l260 259v295h-22Z" />
    </svg>
  )
}
