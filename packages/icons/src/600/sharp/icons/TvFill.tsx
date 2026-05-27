import type { SVGProps, JSX } from 'react'

export default function TvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M322.65-105.87v-80H65.87V-854.7H894.7v668.83H637.91v80H322.65Z" />
    </svg>
  )
}
