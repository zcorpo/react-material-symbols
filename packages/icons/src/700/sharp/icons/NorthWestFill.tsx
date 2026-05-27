import type { SVGProps } from 'react'

export default function NorthWestFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M758-136 270-624v270h-95v-431h431v95H336l488 488-66 66Z" />
    </svg>
  )
}
