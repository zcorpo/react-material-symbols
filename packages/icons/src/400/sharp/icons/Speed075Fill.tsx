import type { SVGProps } from 'react'

export default function Speed075Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-277v-60h60v60h-60Zm370 0v-60h170v-115H570v-231h230v60H630v111h170v235H570Zm-227-1 92-345H265v-60h230v56l-92 349h-60Z" />
    </svg>
  )
}
