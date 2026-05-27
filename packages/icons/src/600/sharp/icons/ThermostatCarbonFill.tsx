import type { SVGProps, JSX } from 'react'

export default function ThermostatCarbonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-29.09 29.09-480 480-930.91 930.91-480 480-29.09Z" />
    </svg>
  )
}
