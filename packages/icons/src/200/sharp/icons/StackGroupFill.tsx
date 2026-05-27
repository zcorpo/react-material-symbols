import type { SVGProps, JSX } from 'react'

export default function StackGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-120v-240H120v-480h480v240h240v480H360Z" />
    </svg>
  )
}
