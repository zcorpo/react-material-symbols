import type { SVGProps } from 'react'

export default function BatteryAndroid6Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-260v-440h762.31v440H60Zm565.39-45.39h151.53v-349.22H625.39v349.22ZM855-392.77v-174.08h45v174.08h-45Z" />
    </svg>
  )
}
