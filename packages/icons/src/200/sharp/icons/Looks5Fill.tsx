import type { SVGProps } from 'react'

export default function Looks5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M382.69-298.54h195.39v-198.08H413.46v-134.07h164.62v-30.77H382.69v195.61h164.62v136.54H382.69v30.77ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
