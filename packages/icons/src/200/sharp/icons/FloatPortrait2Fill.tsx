import type { SVGProps, JSX } from 'react'

export default function FloatPortrait2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M316.92-509.23h253.85v-213.85H316.92v213.85ZM760-120H200v-720h560v720Z" />
    </svg>
  )
}
