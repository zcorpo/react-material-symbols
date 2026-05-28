import type { SVGProps, JSX } from 'react'

export default function PenSize5({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M216.92-320.14q0-42.78 30.08-72.86l320-320q30.25-30.08 73.09-30.08 42.83 0 72.91 30.22t30.08 73q0 42.78-30.08 72.86L393-247q-30.25 30.08-73.09 30.08-42.83 0-72.91-30.22t-30.08-73Z" />
    </svg>
  )
}
