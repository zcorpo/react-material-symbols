import type { SVGProps, JSX } from 'react'

export default function FlightTakeoffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-60h720v60H120Zm66-210L43-568l79-22 117 98 165-45-214-285 98-26 310 260 184-50q29-7 53.5 8t32.5 44q8 28-5.5 52.5T822-501L186-330Z" />
    </svg>
  )
}
