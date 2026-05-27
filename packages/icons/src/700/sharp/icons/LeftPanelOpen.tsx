import type { SVGProps } from 'react'

export default function LeftPanelOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M525-639v318l160-159-160-159ZM189-189h132v-582H189v582Zm227 0h355v-582H416v582Zm-95 0H189h132ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
