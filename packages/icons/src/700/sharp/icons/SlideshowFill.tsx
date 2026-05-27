import type { SVGProps } from 'react'

export default function SlideshowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m381-301 278-179-278-180v359ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
