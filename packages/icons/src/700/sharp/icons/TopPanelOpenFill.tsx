import type { SVGProps, JSX } from 'react'

export default function TopPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-275 159-160H321l159 160Zm-291 86h582v-356H189v356ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
