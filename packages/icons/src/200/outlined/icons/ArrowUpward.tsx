import type { SVGProps } from 'react'

export default function ArrowUpward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-200v-501.38L222-458.77 200-480l280-280 280 280-22 21.23-242.62-242.61V-200h-30.76Z" />
    </svg>
  )
}
