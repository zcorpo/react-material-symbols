import type { SVGProps } from 'react'

export default function Speed175Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-277v-60h60v60h-60Zm370 0v-60h170v-115H650v-231h230v60H710v111h170v235H650Zm-490 0v-346H80v-60h140v406h-60Zm263-1 92-345H345v-60h231v57l-93 348h-60Z" />
    </svg>
  )
}
