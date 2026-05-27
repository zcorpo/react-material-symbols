import type { SVGProps } from 'react'

export default function CalendarCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-132v-622h142v-86h27v86h282v-86h24v86h141v352l-22 22v-151H194v377h291l23 22H172Zm489 20-96-95 15-17 81 81 162-161 16 15-178 177Z" />
    </svg>
  )
}
