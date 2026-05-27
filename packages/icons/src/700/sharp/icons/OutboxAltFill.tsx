import type { SVGProps } from 'react'

export default function OutboxAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m254-266 443-216-443-217v131l183 86-183 85v131Zm443-216ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
