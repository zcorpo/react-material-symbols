import type { SVGProps, JSX } from 'react'

export default function FilterBAndWFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M840-120H120v-720h720v720Zm-660-60h300v-342l300 342v-600H480v258L180-180Z" />
    </svg>
  )
}
