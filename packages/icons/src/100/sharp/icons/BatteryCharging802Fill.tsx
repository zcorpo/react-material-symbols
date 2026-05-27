import type { SVGProps } from 'react'

export default function BatteryCharging802Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M109-309v-342h494l-18 22h-94v298h87l-4 22H109Zm598 0 23-145H620l114-197h-1l-23 145h110L707-309Z" />
    </svg>
  )
}
