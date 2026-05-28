import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidFrame1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-240v-480h800v480H40Zm60-60h680v-360H100v360Zm770-87v-186h50v186h-50Zm-740 57v-300h60v300h-60Z" />
    </svg>
  )
}
