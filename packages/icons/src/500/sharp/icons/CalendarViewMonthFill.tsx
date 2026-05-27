import type { SVGProps } from 'react'

export default function CalendarViewMonthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M78.09-496.43v-305.48h246.52v305.48H78.09Zm279.39 0v-305.48h245.28v305.48H357.48Zm277.91 0v-305.48h246.52v305.48H635.39ZM78.09-158.09v-305.48h246.52v305.48H78.09Zm279.39 0v-305.48h245.28v305.48H357.48Zm277.91 0v-305.48h246.52v305.48H635.39Z" />
    </svg>
  )
}
