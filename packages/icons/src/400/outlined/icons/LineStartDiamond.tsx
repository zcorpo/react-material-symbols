import type { SVGProps, JSX } from 'react'

export default function LineStartDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m360-285 195-195-195-195-195 195 195 195Zm0 85L80-480l280-280 250 250h270v60H610L360-200Zm0-280Z" />
    </svg>
  )
}
