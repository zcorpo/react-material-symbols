import type { SVGProps } from 'react'

export default function CalendarViewMonthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M75.48-498.39v-306.13h245.87v306.13H75.48Zm282.65 0v-306.13h244.3v306.13h-244.3Zm280.52 0v-306.13h245.87v306.13H638.65ZM75.48-155.48v-306.13h245.87v306.13H75.48Zm282.65 0v-306.13h244.3v306.13h-244.3Zm280.52 0v-306.13h245.87v306.13H638.65Z" />
    </svg>
  )
}
