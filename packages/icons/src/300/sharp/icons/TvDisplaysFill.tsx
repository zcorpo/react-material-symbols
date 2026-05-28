import type { SVGProps, JSX } from 'react'

export default function TvDisplaysFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-338.54V-860h600.92v45.39H145.39v476.07H100ZM456.08-100v-80H255.39v-524.61h644.99V-180H699.31v80H456.08Z" />
    </svg>
  )
}
