import type { SVGProps, JSX } from 'react'

export default function DesktopPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M446.15-255.38h178.47v-338.47H446.15v338.47ZM335.38-360h26.16v-318.46h140v-26.16H335.38V-360ZM760-120H200v-720h560v720Z" />
    </svg>
  )
}
