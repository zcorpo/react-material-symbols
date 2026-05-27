import type { SVGProps, JSX } from 'react'

export default function ThermostatCarbonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-78.08 78.08-480 480-881.92 881.92-480 480-78.08Z" />
    </svg>
  )
}
