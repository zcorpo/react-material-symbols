import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid5({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-260v-440h762.31v440H60Zm485.39-45.39h231.53v-349.22H545.39v349.22ZM855-392.77v-174.08h45v174.08h-45Z" />
    </svg>
  )
}
