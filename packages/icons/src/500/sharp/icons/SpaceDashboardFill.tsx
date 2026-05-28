import type { SVGProps, JSX } from 'react'

export default function SpaceDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2H450v732.2H114.02ZM510-541v-305.22h336.22V-541H510Zm336.22 426.98H510V-481h336.22v366.98Z" />
    </svg>
  )
}
