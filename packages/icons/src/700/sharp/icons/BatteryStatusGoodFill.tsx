import type { SVGProps, JSX } from 'react'

export default function BatteryStatusGoodFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M638-102 515-226l66-67 57 57 141-142 66 67-207 209ZM249-55v-787h134v-64h194v64h134v366q-9-1-18-1.5t-17-.5q-96 2-164.5 70.5T443-239q0 54 22.5 101.5T529-55H249Z" />
    </svg>
  )
}
