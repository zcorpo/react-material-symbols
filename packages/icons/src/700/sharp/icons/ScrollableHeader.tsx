import type { SVGProps } from 'react'

export default function ScrollableHeader({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-94h582v-212H189v212Zm0-307h582v-275H189v275Zm0 0v-275 275Z" />
    </svg>
  )
}
