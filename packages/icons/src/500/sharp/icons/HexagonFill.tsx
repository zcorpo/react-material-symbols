import type { SVGProps } from 'react'

export default function HexagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269.61-115.93 59.22-480l210.39-364.07h420.78L900.78-480 690.39-115.93H269.61Z" />
    </svg>
  )
}
