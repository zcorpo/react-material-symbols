import type { SVGProps, JSX } from 'react'

export default function LineEndArrowNotchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m436.41-193.54 148.94-252.39H85.93v-68.14h499.42L436.41-766.46 886.7-480 436.41-193.54Z" />
    </svg>
  )
}
