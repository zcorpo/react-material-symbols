import type { SVGProps, JSX } from 'react'

export default function StraightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440.39-105.87v-597.52l-90 90-55.57-55.57L480-854.7l185.18 185.74-55.57 55.57-90-90v597.52h-79.22Z" />
    </svg>
  )
}
