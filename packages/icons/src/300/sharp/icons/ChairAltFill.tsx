import type { SVGProps, JSX } from 'react'

export default function ChairAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M227.69-143.85v-337.23h110v-88.84h-110v-238.54h504.62v238.54h-110v88.84h110v337.23h-45.39v-121.61H273.08v121.61h-45.39Zm155.39-337.23h193.84v-88.84H383.08v88.84Z" />
    </svg>
  )
}
