import type { SVGProps, JSX } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M211-176q-16 3-27-8t-8-27l23-111 123 123-111 23Zm128-38L214-339l424-423q15-15 37-15t38 15l49 49q15 16 15 38t-15 37L339-214Z" />
    </svg>
  )
}
