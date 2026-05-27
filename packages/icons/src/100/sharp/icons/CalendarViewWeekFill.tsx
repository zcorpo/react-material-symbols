import type { SVGProps } from 'react'

export default function CalendarViewWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M494-228v-504h145v504H494Zm-173 0v-504h145v504H321Zm-173 0v-504h145v504H148Zm519 0v-504h145v504H667Z" />
    </svg>
  )
}
