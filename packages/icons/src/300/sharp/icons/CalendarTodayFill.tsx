import type { SVGProps, JSX } from 'react'

export default function CalendarTodayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-100v-694.61h131.54v-70h50.38v70h317.69v-70h49.23v70H820V-100H140Zm45.39-45.39h589.22V-555H185.39v409.61Z" />
    </svg>
  )
}
