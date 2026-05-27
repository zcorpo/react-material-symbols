import type { SVGProps, JSX } from 'react'

export default function EventListFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M572.31-140v-287.69H860V-140H572.31ZM100-261.15v-45.39h344.62v45.39H100Zm472.31-271.16V-820H860v287.69H572.31ZM100-653.46v-45.39h344.62v45.39H100Z" />
    </svg>
  )
}
