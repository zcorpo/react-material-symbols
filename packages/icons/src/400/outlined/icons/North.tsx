import type { SVGProps } from 'react'

export default function North({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-80v-686L242-558l-42-42 280-280 280 280-42 42-208-208v686h-60Z" />
    </svg>
  )
}
