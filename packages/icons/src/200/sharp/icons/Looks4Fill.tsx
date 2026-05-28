import type { SVGProps, JSX } from 'react'

export default function Looks4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm387.31-138.54h30.77v-362.92h-30.77v164.84H413.46v-164.84h-30.77v195.61h164.62v167.31Z" />
    </svg>
  )
}
