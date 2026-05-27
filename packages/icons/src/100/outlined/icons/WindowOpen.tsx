import type { SVGProps } from 'react'

export default function WindowOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-616h536v616H212Zm22-319h218v-28h56v28h218v-275H234v275Zm0 297h492-492Z" />
    </svg>
  )
}
