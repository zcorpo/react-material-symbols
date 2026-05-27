import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidPlusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-260v-440h604.23v124.23h-120v191.54h120V-260H60Zm677.31-77.31v-120h-120v-45.38h120v-120h45.38v120h120v45.38h-120v120h-45.38Z" />
    </svg>
  )
}
