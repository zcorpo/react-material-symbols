import type { SVGProps, JSX } from 'react'

export default function TableChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-614v-174h616v174H172Zm0 442v-420h151v420H172Zm465 0v-420h151v420H637Zm-292 0v-420h270v420H345Z" />
    </svg>
  )
}
