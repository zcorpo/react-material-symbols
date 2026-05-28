import type { SVGProps, JSX } from 'react'

export default function StackGroup({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-100v-240H100v-520h520v240h240v520H340Zm45.39-45.39h429.22v-429.22h-240v-240H145.39v429.22h240v240ZM480-480Z" />
    </svg>
  )
}
