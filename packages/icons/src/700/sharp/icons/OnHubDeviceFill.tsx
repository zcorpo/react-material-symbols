import type { SVGProps } from 'react'

export default function OnHubDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297-80v-94h366v94H297Zm0-124-47-681h460l-47 681H297Z" />
    </svg>
  )
}
