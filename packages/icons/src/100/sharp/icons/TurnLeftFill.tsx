import type { SVGProps, JSX } from 'react'

export default function TurnLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M633-212v-336H215l97 97-15 16-125-124 125-125 15 16-97 98h440v358h-22Z" />
    </svg>
  )
}
