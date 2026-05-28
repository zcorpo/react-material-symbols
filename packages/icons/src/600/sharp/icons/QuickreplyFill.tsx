import type { SVGProps, JSX } from 'react'

export default function QuickreplyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M762.61-27v-198.87H706v-258.65h152.91l-58 170h87L762.61-27ZM65.87-65.87V-894.7H894.7v350.18H646v318.65H225.87l-160 160Z" />
    </svg>
  )
}
