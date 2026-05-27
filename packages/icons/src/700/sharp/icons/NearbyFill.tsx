import type { SVGProps, JSX } from 'react'

export default function NearbyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-279 279-480l201-202 202 202-202 201Zm0 252L27-481l453-453 453 453L480-27Zm0-154 300-299-300-300-299 300 299 299Z" />
    </svg>
  )
}
