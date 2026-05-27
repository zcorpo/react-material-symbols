import type { SVGProps, JSX } from 'react'

export default function LineStartDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-194.98 74.98-480 360-765.02l250.96 250.95h273.11v68.14H610.96L360-194.98Z" />
    </svg>
  )
}
