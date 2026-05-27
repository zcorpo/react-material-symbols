import type { SVGProps } from 'react'

export default function SpaceDashboard2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-60h350v-600H180v600Zm410 0h190v-270H590v270Zm0-330h190v-270H590v270Z" />
    </svg>
  )
}
