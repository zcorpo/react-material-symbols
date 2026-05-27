import type { SVGProps, JSX } from 'react'

export default function AirplayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M257.04-105.87 480-328.83l222.96 222.96H257.04Zm-191.17-80V-854.7H894.7v668.83l-184 4L475-416 244.87-185.87h-179Z" />
    </svg>
  )
}
