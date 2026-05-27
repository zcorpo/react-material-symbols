import type { SVGProps, JSX } from 'react'

export default function ViewRealSizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M261-255v-356h-87v-95h181v451h-94Zm186 0v-94h95v94h-95Zm214 0v-356h-87v-95h181v451h-94ZM447-429v-95h95v95h-95Z" />
    </svg>
  )
}
