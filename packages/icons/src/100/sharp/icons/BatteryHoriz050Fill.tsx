import type { SVGProps, JSX } from 'react'

export default function BatteryHoriz050Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-326v-90h-48v-128h48v-90h648v308H180Zm21-22h317v-264H201v264Z" />
    </svg>
  )
}
