import type { SVGProps } from 'react'

export default function SpaceDashboard2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-94h341v-582H189v582Zm401 0h181v-261H590v261Zm0-321h181v-261H590v261Z" />
    </svg>
  )
}
