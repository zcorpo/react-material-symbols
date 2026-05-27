import type { SVGProps } from 'react'

export default function BatteryAndroidFrame5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.77-345.77v-268.46h365.38v268.46H145.77ZM60-260v-440h762.31v440H60Zm45.39-45.39h671.53v-349.22H105.39v349.22ZM855-392.77v-174.08h45v174.08h-45Z" />
    </svg>
  )
}
