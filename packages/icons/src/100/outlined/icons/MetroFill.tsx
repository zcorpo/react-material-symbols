import type { SVGProps } from 'react'

export default function MetroFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h101l207 547 207-547h101v616h-54v-583L509-172h-59L226-750v578h-54Z" />
    </svg>
  )
}
