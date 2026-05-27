import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid6Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-240v-480h800v480H40Zm580-60h160v-360H620v360Zm250-87v-186h50v186h-50Z" />
    </svg>
  )
}
