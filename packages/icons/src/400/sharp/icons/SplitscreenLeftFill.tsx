import type { SVGProps, JSX } from 'react'

export default function SplitscreenLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h330v720H120Zm390 0v-720h330v720H510Zm270-660H570v600h210v-600Z" />
    </svg>
  )
}
