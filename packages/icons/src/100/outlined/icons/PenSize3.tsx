import type { SVGProps, JSX } from 'react'

export default function PenSize3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M236-236q-9-9-9-22t9-22l445-444q9-9 21.5-9t21.5 9q9 9 9 22t-9 22L280-236q-9 9-22 9t-22-9Z" />
    </svg>
  )
}
