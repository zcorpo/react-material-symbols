import type { SVGProps } from 'react'

export default function ThumbnailBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm280-45.39h434.61v-509.22H380v509.22Zm-45.39 0v-509.22H145.39v509.22h189.22Zm-189.22 0v-509.22 509.22Zm189.22 0H380h-45.39Zm0-509.22H380h-45.39Z" />
    </svg>
  )
}
