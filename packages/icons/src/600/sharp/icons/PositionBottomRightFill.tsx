import type { SVGProps, JSX } from 'react'

export default function PositionBottomRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M375.09-292.09h349.82v-103H375.09v103ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
