import type { SVGProps, JSX } from 'react'

export default function LineStartDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m360-313 167-167-167-167-167 167 167 167Zm0 134L59-480l301-301 254 254h283v94H614L360-179Zm0-301Z" />
    </svg>
  )
}
