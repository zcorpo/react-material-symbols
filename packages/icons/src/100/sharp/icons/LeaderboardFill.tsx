import type { SVGProps } from 'react'

export default function LeaderboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m138-150 19-408 171-12-19 408-171 12Zm241 0 18-648 185-12-18 648-185 12Zm253 0 19-328 171-12-19 328-171 12Z" />
    </svg>
  )
}
