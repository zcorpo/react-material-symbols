import type { SVGProps } from 'react'

export default function Crop219({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-300v-360h760v360H100Zm45.39-45.39h669.22v-269.22H145.39v269.22Zm0 0v-269.22 269.22Z" />
    </svg>
  )
}
