import type { SVGProps } from 'react'

export default function KeyboardControlKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M242-432.26 194.26-480 480-765.74 765.74-480 718-432.26l-238-237-238 237Z" />
    </svg>
  )
}
