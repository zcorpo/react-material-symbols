import type { SVGProps } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-280v-400h60v170h280v-170h60v400h-60v-170H340v170h-60Z" />
    </svg>
  )
}
