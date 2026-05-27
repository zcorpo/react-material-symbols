import type { SVGProps, JSX } from 'react'

export default function ThermostatCarbonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-106.15 106.15-480 480-853.85 853.85-480 480-106.15Z" />
    </svg>
  )
}
