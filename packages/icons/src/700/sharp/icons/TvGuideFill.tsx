import type { SVGProps, JSX } from 'react'

export default function TvGuideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm203-216h65.47v-264H485l98 264h63.6L771-639h-68l-88 222-87-222H189v64h109v264Z" />
    </svg>
  )
}
