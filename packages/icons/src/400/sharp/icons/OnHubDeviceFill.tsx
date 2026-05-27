import type { SVGProps, JSX } from 'react'

export default function OnHubDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M321-120v-60h318v60H321Zm0-90-45-630h408l-45 630H321Z" />
    </svg>
  )
}
