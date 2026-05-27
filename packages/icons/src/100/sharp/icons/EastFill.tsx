import type { SVGProps } from 'react'

export default function EastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m583-235-15-15 220-220H132v-22h657L568-712l15-15 246 246-246 246Z" />
    </svg>
  )
}
