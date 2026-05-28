import type { SVGProps, JSX } from 'react'

export default function CollapseContentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M445.09-445.65v259.78h-79.22v-180h-180v-79.78h259.22ZM594.7-774.7v180h180v79.79H514.91V-774.7h79.79Z" />
    </svg>
  )
}
