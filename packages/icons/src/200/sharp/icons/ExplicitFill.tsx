import type { SVGProps, JSX } from 'react'

export default function ExplicitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M382.92-300h193.93v-30.77H413.69v-132.15h163.16v-30.77H413.69v-132.39h163.16v-30.77H382.92V-300ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
