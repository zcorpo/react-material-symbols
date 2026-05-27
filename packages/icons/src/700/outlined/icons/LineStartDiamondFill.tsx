import type { SVGProps } from 'react'

export default function LineStartDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-179 59-480l301-301 254 254h283v94H614L360-179Z" />
    </svg>
  )
}
