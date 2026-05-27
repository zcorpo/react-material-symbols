import type { SVGProps } from 'react'

export default function PlayPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M170.61-313.35v-333.3L417.74-480 170.61-313.35Zm359.78 11.44v-356.18h79.22v356.18h-79.22Zm179.22 0v-356.18h79.78v356.18h-79.78Z" />
    </svg>
  )
}
