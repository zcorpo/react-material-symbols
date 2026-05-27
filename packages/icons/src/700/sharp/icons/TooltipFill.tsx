import type { SVGProps, JSX } from 'react'

export default function TooltipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-55 365-226H55v-680h851v680H595L480-55Z" />
    </svg>
  )
}
