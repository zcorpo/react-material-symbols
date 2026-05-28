import type { SVGProps, JSX } from 'react'

export default function CalendarViewMonthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M72-501v-307h245v307H72Zm287 0v-307h243v307H359Zm284 0v-307h245v307H643ZM72-152v-307h245v307H72Zm287 0v-307h243v307H359Zm284 0v-307h245v307H643Z" />
    </svg>
  )
}
