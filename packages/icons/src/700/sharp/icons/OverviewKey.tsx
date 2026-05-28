import type { SVGProps, JSX } from 'react'

export default function OverviewKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M17-175v-611h611v611H17Zm94-94h422v-422H111v422Zm603 94v-611h72v611h-72Zm157 0v-611h72v611h-72Zm-760-94v-422 422Z" />
    </svg>
  )
}
