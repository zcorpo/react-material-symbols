import type { SVGProps } from 'react'

export default function BatteryAndroidFrame1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-260v-440h762.31v440H60Zm45.39-45.39h671.53v-349.22H105.39v349.22ZM855-392.77v-174.08h45v174.08h-45Zm-709.23 47v-268.46h45.38v268.46h-45.38Z" />
    </svg>
  )
}
