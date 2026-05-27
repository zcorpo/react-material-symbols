import type { SVGProps } from 'react'

export default function LandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m17-229 263-351 193 257h73L397-523l163-217 383 511H17Z" />
    </svg>
  )
}
