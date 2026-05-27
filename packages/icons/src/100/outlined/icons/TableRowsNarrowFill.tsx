import type { SVGProps, JSX } from 'react'

export default function TableRowsNarrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-326v-143h616v143H172Zm0-165v-144h616v144H172Zm0-166v-143h616v143H172Zm0 497v-144h616v144H172Z" />
    </svg>
  )
}
