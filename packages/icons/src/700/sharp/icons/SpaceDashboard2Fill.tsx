import type { SVGProps, JSX } from 'react'

export default function SpaceDashboard2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M815-95v-771h51v771h-51Zm-701-19h416v-732H114v732Zm476 0h256v-336H590v336Zm0-396h256v-336H590v336Z" />
    </svg>
  )
}
