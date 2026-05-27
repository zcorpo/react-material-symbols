import type { SVGProps } from 'react'

export default function SatelliteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234-280h490L577-476 445-305l-93-127-118 152Zm6-218q93 0 157.5-64.5T462-720h-54q0 70-49 119t-119 49v54Zm0-131q39 0 67-26.5t28-64.5h-95v91ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
