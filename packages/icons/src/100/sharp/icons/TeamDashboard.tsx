import type { SVGProps } from 'react'

export default function TeamDashboard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm257-22v-275H194v275h235Zm22 0h315v-275H451v275ZM194-491h572v-275H194v275Z" />
    </svg>
  )
}
