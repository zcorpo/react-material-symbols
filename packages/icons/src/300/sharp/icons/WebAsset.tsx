import type { SVGProps } from 'react'

export default function WebAsset({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm45.39-45.39h669.22v-426.38H145.39v426.38Z" />
    </svg>
  )
}
