import type { SVGProps, JSX } from 'react'

export default function RMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-560v-268h228v158h-54l47 110h-30l-47-109H154v109h-22Zm22-131h184v-115H154v115Z" />
    </svg>
  )
}
