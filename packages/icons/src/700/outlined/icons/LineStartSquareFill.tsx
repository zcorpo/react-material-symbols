import type { SVGProps } from 'react'

export default function LineStartSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M532-248H68v-464h464v185h365v94H532v185Z" />
    </svg>
  )
}
