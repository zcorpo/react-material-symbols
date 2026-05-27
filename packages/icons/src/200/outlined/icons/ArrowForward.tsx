import type { SVGProps, JSX } from 'react'

export default function ArrowForward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M701.38-464.62H200v-30.76h501.38L458.77-738 480-760l280 280-280 280-21.23-22 242.61-242.62Z" />
    </svg>
  )
}
