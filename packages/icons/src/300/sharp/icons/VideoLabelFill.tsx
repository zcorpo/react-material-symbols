import type { SVGProps, JSX } from 'react'

export default function VideoLabelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm45.39-172.08h669.22v-382.53H145.39v382.53Z" />
    </svg>
  )
}
