import type { SVGProps, JSX } from 'react'

export default function ParkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M551-55H410v-149H73l189-274h-96l314-446 314 446h-95l188 274H551v149Z" />
    </svg>
  )
}
