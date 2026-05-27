import type { SVGProps } from 'react'

export default function CalendarViewWeek({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M492-234h146v-492H492v492Zm-170 0h146v-492H322v492Zm-168 0h146v-492H154v492Zm506 0h146v-492H660v492Zm-528 22v-536h696v536H132Z" />
    </svg>
  )
}
