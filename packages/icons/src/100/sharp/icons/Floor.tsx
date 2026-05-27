import type { SVGProps, JSX } from 'react'

export default function Floor({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M146-109v-22h143v-180h180v-180h180v-180h180v-143h22v165H671v180H491v180H311v180H146Z" />
    </svg>
  )
}
