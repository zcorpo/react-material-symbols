import type { SVGProps, JSX } from 'react'

export default function LineStartDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-200 80-480l280-280 250 250h270v60H610L360-200Z" />
    </svg>
  )
}
