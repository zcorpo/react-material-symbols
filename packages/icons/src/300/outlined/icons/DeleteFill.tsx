import type { SVGProps } from 'react'

export default function DeleteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M278.31-140q-23.53 0-40.61-17.08t-17.08-40.61v-544.23H180v-45.39h171.08v-28.07h257.84v28.07H780v45.39h-40.62v544.23q0 23.53-17.08 40.61T681.69-140H278.31Zm102.92-129.85h45.39v-388.61h-45.39v388.61Zm152.15 0h45.39v-388.61h-45.39v388.61Z" />
    </svg>
  )
}
