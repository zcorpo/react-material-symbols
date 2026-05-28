import type { SVGProps, JSX } from 'react'

export default function DataTableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-588h616v-172H172v172Zm0 194h616v-172H172v172Zm0 194h616v-172H172v172Zm87-447v-54h54v54h-54Zm0 194v-54h54v54h-54Zm0 194v-54h54v54h-54Z" />
    </svg>
  )
}
