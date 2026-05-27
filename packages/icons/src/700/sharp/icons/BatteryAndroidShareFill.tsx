import type { SVGProps } from 'react'

export default function BatteryAndroidShareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-215v-531h798L613-571H492v356H10Zm525-110v-187h233l-64-65 56-55 160 159-160 160-56-57 63-63H615v108h-80Z" />
    </svg>
  )
}
