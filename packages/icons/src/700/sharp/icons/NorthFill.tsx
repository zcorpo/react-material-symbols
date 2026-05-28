import type { SVGProps, JSX } from 'react'

export default function NorthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M433-55v-671L241-532l-66-67 305-305 306 305-66 66-193-193v671h-94Z" />
    </svg>
  )
}
