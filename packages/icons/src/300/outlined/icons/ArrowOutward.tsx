import type { SVGProps, JSX } from 'react'

export default function ArrowOutward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M241.62-258.69 210-290.31l413.92-414.31H241.31V-750h460v460h-45.39v-382.62l-414.3 413.93Z" />
    </svg>
  )
}
