import type { SVGProps, JSX } from 'react'

export default function Speed075Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-277v-60h60v60h-60Zm370 0v-60h170v-115H570v-231h230v60H630v111h110q24 0 42 18t18 42v115q0 24-18 42t-42 18H570Zm-227-1 92-345H265v-60h170q24 0 42 16t18 40q0 3-2 13l-90 336h-60Z" />
    </svg>
  )
}
