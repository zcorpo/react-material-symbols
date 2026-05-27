import type { SVGProps } from 'react'

export default function BatteryAndroid5({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-240v-480h800v480H40Zm500-60h240v-360H540v360Zm330-87v-186h50v186h-50Z" />
    </svg>
  )
}
