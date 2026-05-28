import type { SVGProps, JSX } from 'react'

export default function DockToLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M189-189h356v-582H189v582ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
