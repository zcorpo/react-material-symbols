import type { SVGProps, JSX } from 'react'

export default function PauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M548.22-174v-612h214v612h-214Zm-350.44 0v-612h214v612h-214Z" />
    </svg>
  )
}
