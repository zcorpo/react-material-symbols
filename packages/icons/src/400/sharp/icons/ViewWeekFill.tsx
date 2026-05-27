import type { SVGProps, JSX } from 'react'

export default function ViewWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M81-160v-640h230v640H81Zm290 0v-640h219v640H371Zm279 0v-640h230v640H650Z" />
    </svg>
  )
}
