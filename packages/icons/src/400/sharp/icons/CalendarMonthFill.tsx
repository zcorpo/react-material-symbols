import type { SVGProps, JSX } from 'react'

export default function CalendarMonthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-400v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM440-240v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm320 0v-80h80v80h-80ZM120-80v-740h125v-60h65v60h340v-60h65v60h125v740H120Zm60-60h600v-430H180v430Z" />
    </svg>
  )
}
