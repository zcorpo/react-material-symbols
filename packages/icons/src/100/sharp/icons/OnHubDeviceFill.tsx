import type { SVGProps, JSX } from 'react'

export default function OnHubDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M368-184v-22h224v22H368Zm0-99-38-505h300l-38 505H368Z" />
    </svg>
  )
}
