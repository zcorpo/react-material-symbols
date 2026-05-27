import type { SVGProps, JSX } from 'react'

export default function FloorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M103-73v-94h150v-180h180v-180h180v-180h180v-150h94v244H707v180H527v180H347v180H103Z" />
    </svg>
  )
}
