import type { SVGProps, JSX } from 'react'

export default function ArrowShapeUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M348-172v-227H172l308-349 308 349H612v227H348Z" />
    </svg>
  )
}
