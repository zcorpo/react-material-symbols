import type { SVGProps, JSX } from 'react'

export default function FloorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M115.93-85.93v-68.14h150v-180h180v-180h180v-180h180v-150h68.14v218.14h-180v180h-180v180h-180v180H115.93Z" />
    </svg>
  )
}
