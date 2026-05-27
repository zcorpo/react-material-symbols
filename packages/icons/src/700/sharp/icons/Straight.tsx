import type { SVGProps, JSX } from 'react'

export default function Straight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-95v-591l-90 90-66-66 203-204 203 204-66 66-90-90v591h-94Z" />
    </svg>
  )
}
