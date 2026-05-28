import type { SVGProps, JSX } from 'react'

export default function ExpandContent({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M190.39-190.39v-259.22h79.22v180h180v79.22H190.39Zm500-320v-180h-180v-79.22h259.22v259.22h-79.22Z" />
    </svg>
  )
}
