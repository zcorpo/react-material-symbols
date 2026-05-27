import type { SVGProps } from 'react'

export default function BatteryAndroidFrame2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M130-330v-300h140v300H130Zm-90 90v-480h800v480H40Zm60-60h680v-360H100v360Zm770-87v-186h50v186h-50Z" />
    </svg>
  )
}
