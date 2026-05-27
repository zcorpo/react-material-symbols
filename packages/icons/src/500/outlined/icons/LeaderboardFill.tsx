import type { SVGProps, JSX } from 'react'

export default function LeaderboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m78.57-118.57-2.16-480 211.92-2.86 2.15 480-211.91 2.86Zm296.67 0-2.15-720 211.67-2.86 2.15 720-211.67 2.86Zm296.67 0-2.15-400 211.67-2.86 2.16 400-211.68 2.86Z" />
    </svg>
  )
}
