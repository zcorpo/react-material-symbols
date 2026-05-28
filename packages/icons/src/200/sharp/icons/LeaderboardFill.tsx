import type { SVGProps, JSX } from 'react'

export default function LeaderboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m124.62-143.08 14.61-424.61 180-9.23-14.61 424.61-180 9.23Zm253.46 0 13.84-664.61 190.77-9.23-13.84 664.61-190.77 9.23Zm262.69 0 14.61-344.61 180-9.23-14.61 344.61-180 9.23Z" />
    </svg>
  )
}
