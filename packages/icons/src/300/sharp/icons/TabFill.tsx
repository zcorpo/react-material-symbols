import type { SVGProps } from 'react'

export default function TabFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm422.85-385.08h291.76v-169.53H522.85v169.53Z" />
    </svg>
  )
}
