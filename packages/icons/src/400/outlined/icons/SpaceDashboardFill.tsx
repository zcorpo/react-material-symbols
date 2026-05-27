import type { SVGProps } from 'react'

export default function SpaceDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h270v720H180Zm330 0v-361h330v301q0 24-18 42t-42 18H510Zm0-421v-299h270q24 0 42 18t18 42v239H510Z" />
    </svg>
  )
}
