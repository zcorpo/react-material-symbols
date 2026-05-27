import type { SVGProps, JSX } from 'react'

export default function TooltipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-80 376-237H80v-643h800v643H584L480-80Z" />
    </svg>
  )
}
