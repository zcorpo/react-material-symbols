import type { SVGProps, JSX } from 'react'

export default function FloorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M130-97.31v-45.38h147.31v-180h180v-180h180v-180h180V-830h45.38v192.69h-180v180h-180v180h-180v180H130Z" />
    </svg>
  )
}
