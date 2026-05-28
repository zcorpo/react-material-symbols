import type { SVGProps, JSX } from 'react'

export default function CollapseContent({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M449-450v275h-94v-180H175v-95h274Zm157-336v180h180v95H511v-275h95Z" />
    </svg>
  )
}
