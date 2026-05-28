import type { SVGProps, JSX } from 'react'

export default function ParkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M538-80H423v-149H120l189-274h-95l266-377 266 377h-94l188 274H538v149Z" />
    </svg>
  )
}
