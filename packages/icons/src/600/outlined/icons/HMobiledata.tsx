import type { SVGProps, JSX } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M276.61-276.61v-406.78h66.78v170h273.22v-170h66.78v406.78h-66.78v-170H343.39v170h-66.78Z" />
    </svg>
  )
}
