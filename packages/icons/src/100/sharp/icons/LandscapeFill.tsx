import type { SVGProps } from 'react'

export default function LandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m139-292 146-196 131 174h94l-93-123 148-197 256 342H139Z" />
    </svg>
  )
}
