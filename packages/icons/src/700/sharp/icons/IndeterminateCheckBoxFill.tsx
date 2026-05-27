import type { SVGProps } from 'react'

export default function IndeterminateCheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-441h461v-82H250v82ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
