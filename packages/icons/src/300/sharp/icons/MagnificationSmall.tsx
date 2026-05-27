import type { SVGProps } from 'react'

export default function MagnificationSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M205.54-535.69h141v-138.77h-141v138.77ZM100-180v-600h760v600H100Zm45.39-45.39h669.22v-509.22H145.39v509.22Zm0 0v-509.22 509.22Z" />
    </svg>
  )
}
