import type { SVGProps } from 'react'

export default function SpaceDashboard2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h355v-572H194v572Zm377 0h195v-275H571v275Zm0-297h195v-275H571v275Z" />
    </svg>
  )
}
