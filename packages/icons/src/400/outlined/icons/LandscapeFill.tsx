import type { SVGProps } from 'react'

export default function LandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m40-240 240-320 195 260h75L397-503l163-217 360 480H40Z" />
    </svg>
  )
}
