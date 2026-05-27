import type { SVGProps } from 'react'

export default function ChevronRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M548-480 360-669l16-16 204 205-204 204-16-16 188-188Z" />
    </svg>
  )
}
