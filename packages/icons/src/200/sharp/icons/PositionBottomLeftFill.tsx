import type { SVGProps, JSX } from 'react'

export default function PositionBottomLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-290.85h320V-357H260v66.15ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
