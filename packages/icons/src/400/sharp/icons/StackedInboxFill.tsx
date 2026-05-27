import type { SVGProps } from 'react'

export default function StackedInboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M150-240v-600h780v600H150Zm390.5-176q37.5 0 66.5-30t29-68h234v-266H210v266h234q0 38 29.5 68t67 30ZM739-120H30v-529h60v469h649v60Z" />
    </svg>
  )
}
