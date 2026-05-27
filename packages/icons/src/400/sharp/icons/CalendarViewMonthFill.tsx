import type { SVGProps } from 'react'

export default function CalendarViewMonthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-495v-305h247v305H80Zm277 0v-305h246v305H357Zm276 0v-305h247v305H633ZM80-160v-305h247v305H80Zm277 0v-305h246v305H357Zm276 0v-305h247v305H633Z" />
    </svg>
  )
}
