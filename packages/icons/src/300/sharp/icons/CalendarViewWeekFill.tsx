import type { SVGProps } from 'react'

export default function CalendarViewWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M503.85-186.16v-587.68H655v587.68H503.85Zm-198.85 0v-587.68h151.15v587.68H305Zm-198.84 0v-587.68h151.15v587.68H106.16Zm596.53 0v-587.68h151.15v587.68H702.69Z" />
    </svg>
  )
}
