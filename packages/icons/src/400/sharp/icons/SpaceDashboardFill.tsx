import type { SVGProps, JSX } from 'react'

export default function SpaceDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h330v720H120Zm390-421v-299h330v299H510Zm330 421H510v-361h330v361Z" />
    </svg>
  )
}
