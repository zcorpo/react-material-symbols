import type { SVGProps, JSX } from 'react'

export default function CalendarTodayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-74.02v-752.2h131.03v-60h69.02v60h331.86v-60h69.12v60h131.17v752.2h-732.2Zm68.13-68.13h595.7V-570h-595.7v427.85Z" />
    </svg>
  )
}
