import type { SVGProps } from 'react'

export default function VideocamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M157-212v-536h536v252l110-110v251L693-465v253H157Z" />
    </svg>
  )
}
