import type { SVGProps, JSX } from 'react'

export default function ParkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M541.11-74.02H419.89v-149H108.76l189-274h-95.24L480-890.52l277.48 393.5h-94.24l188 274H541.11v149Z" />
    </svg>
  )
}
