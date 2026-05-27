import type { SVGProps } from 'react'

export default function LineStartDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-244.62 124.62-480 360-715.38l212.69 212.69h285.77v45.38H572.69L360-244.62Z" />
    </svg>
  )
}
