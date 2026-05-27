import type { SVGProps } from 'react'

export default function CalendarViewWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-160v-640h155v640H510Zm-215 0v-640h155v640H295Zm-215 0v-640h155v640H80Zm645 0v-640h155v640H725Z" />
    </svg>
  )
}
