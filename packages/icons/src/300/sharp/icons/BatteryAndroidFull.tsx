import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-260v-440h762.31v440H60Zm795-132.77v-174.08h45v174.08h-45Z" />
    </svg>
  )
}
