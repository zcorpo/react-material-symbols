import type { SVGProps } from 'react'

export default function VideocamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M109.62-180v-600h599.99v266.15l140.77-140.76v348.84L709.61-446.54V-180H109.62Z" />
    </svg>
  )
}
