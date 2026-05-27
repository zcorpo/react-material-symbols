import type { SVGProps, JSX } from 'react'

export default function CalendarViewWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M497.69-212.31v-535.38H645v535.38H497.69Zm-182.69 0v-535.38h147.31v535.38H315Zm-182.69 0v-535.38h147.31v535.38H132.31Zm548.07 0v-535.38h147.31v535.38H680.38Z" />
    </svg>
  )
}
