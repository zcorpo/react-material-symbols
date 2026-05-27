import type { SVGProps } from 'react'

export default function BatteryAndroid0Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h724.62v400H80Zm760-118.54v-162.15h40v162.15h-40Z" />
    </svg>
  )
}
