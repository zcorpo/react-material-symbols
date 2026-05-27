import type { SVGProps, JSX } from 'react'

export default function Label({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h533.31l227.3 300-226.3 300H100Zm45.39-45.39h465.23L804.08-480 610.62-734.61H145.39v509.22ZM474.92-480Z" />
    </svg>
  )
}
