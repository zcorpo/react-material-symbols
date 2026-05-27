import type { SVGProps, JSX } from 'react'

export default function PersonalPlacesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-198v-550h331q6 0 11 3.5t9 7.5l93 135-93 134q-4 5-9 8t-11 3H314v259h-22Z" />
    </svg>
  )
}
