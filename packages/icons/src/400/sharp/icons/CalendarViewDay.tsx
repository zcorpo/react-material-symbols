import type { SVGProps } from 'react'

export default function CalendarViewDay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm0-163v-394h720v394H120Zm60-60h600v-274H180v274Zm-60-437v-60h720v60H120Zm60 437v-274 274Z" />
    </svg>
  )
}
