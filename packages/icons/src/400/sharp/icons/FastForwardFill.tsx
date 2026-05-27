import type { SVGProps } from 'react'

export default function FastForwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M104-240v-480l346 240-346 240Zm407 0v-480l346 240-346 240Z" />
    </svg>
  )
}
