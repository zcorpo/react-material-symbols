import type { SVGProps, JSX } from 'react'

export default function LeaderboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-480h210v480H80Zm295 0v-720h210v720H375Zm295 0v-400h210v400H670Z" />
    </svg>
  )
}
