import type { SVGProps, JSX } from 'react'

export default function CalendarViewWeek({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M514-225.09h120.74v-509.82H514v509.82Zm-187.17 0H447v-509.82H326.83v509.82Zm-181.74 0h121.74v-509.82H145.09v509.82Zm549.65 0h120.17v-509.82H694.74v509.82ZM65.87-145.87V-814.7H894.7v668.83H65.87Z" />
    </svg>
  )
}
