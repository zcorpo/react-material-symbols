import type { SVGProps } from 'react'

export default function Timer2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M349-246v-191q0-21 15-36t36-15h203q14 0 23-9t9-23v-146q0-14-9-23t-23-9H349v-16h251q21 0 36 15t15 36v140q0 21-15 36t-36 15H397q-14 0-23 9t-9 23v178h286v16H349Z" />
    </svg>
  )
}
