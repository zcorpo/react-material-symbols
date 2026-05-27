import type { SVGProps, JSX } from 'react'

export default function ShiftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-160v-284.62H204.61L480-816.92l275.39 372.3H600V-160H360Z" />
    </svg>
  )
}
