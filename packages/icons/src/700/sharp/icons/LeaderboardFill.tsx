import type { SVGProps, JSX } from 'react'

export default function LeaderboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74-114-9-480 218-12 9 480-218 12Zm302 0-9-720 217-12 9 720-217 12Zm302 0-9-400 217-12 9 400-217 12Z" />
    </svg>
  )
}
