import type { SVGProps } from 'react'

export default function ImageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223-268h515L578-488 446-317l-93-127-130 176ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
