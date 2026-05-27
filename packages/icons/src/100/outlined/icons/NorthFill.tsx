import type { SVGProps } from 'react'

export default function NorthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-132v-657L249-568l-15-15 246-246 246 246-15 15-220-220v656h-22Z" />
    </svg>
  )
}
