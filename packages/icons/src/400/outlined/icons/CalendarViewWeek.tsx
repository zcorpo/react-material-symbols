import type { SVGProps, JSX } from 'react'

export default function CalendarViewWeek({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm374-60h123v-520H514v520Zm-190 0h123v-520H324v520Zm-184 0h124v-520H140v520Zm557 0h123v-520H697v520Z" />
    </svg>
  )
}
