import type { SVGProps } from 'react'

export default function DeveloperGuideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm334-594v234l73-44 74 44v-234H506Z" />
    </svg>
  )
}
