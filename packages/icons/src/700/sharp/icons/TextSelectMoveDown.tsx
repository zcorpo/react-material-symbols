import type { SVGProps, JSX } from 'react'

export default function TextSelectMoveDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M113-794v-94h734v94H113Zm367 525L309-440l67-66 57 56v-237h94v237l57-56 67 66-171 171ZM113-72v-95h734v95H113Z" />
    </svg>
  )
}
