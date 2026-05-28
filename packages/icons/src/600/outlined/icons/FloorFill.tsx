import type { SVGProps, JSX } from 'react'

export default function FloorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M110.39-80.39v-79.22h150v-180h180v-180h180v-180h180v-150h79.22v229.22h-180v180h-180v180h-180v180H110.39Z" />
    </svg>
  )
}
