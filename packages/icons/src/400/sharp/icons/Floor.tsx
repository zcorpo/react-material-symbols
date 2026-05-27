import type { SVGProps, JSX } from 'react'

export default function Floor({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-90v-60h150v-180h180v-180h180v-180h180v-150h60v210H690v180H510v180H330v180H120Z" />
    </svg>
  )
}
