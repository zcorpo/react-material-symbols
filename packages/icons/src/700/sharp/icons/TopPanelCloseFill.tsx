import type { SVGProps } from 'react'

export default function TopPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M321-275h318L480-435 321-275Zm-132 86h582v-356H189v356ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
