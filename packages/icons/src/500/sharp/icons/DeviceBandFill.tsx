import type { SVGProps } from 'react'

export default function DeviceBandFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M317.74-74.02v-529.7h-44.31v-110.61h44.31v-171.89h326v171.89h45.06v110.61h-45.06v529.7h-326Z" />
    </svg>
  )
}
