import type { SVGProps } from 'react'

export default function Segment({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M335-203v-95h531v95H335Zm0-230v-94h531v94H335ZM95-662v-95h771v95H95Z" />
    </svg>
  )
}
