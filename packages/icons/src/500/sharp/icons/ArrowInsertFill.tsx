import type { SVGProps, JSX } from 'react'

export default function ArrowInsertFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M716.33-240.02 308.39-647.96v372.03h-68.37v-488.14h488.37v68.14H356.37L764.07-288l-47.74 47.98Z" />
    </svg>
  )
}
