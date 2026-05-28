import type { SVGProps, JSX } from 'react'

export default function OutdoorGardenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M81-120h246v-600L204-840 81-720v600Zm276 0h246v-600L480-840 357-720v600Zm276 0h246v-600L756-840 633-720v600Z" />
    </svg>
  )
}
