import type { SVGProps } from 'react'

export default function BatteryAndroidFrameFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-339v-282h576v282H135ZM10-215v-531h826v531H10Zm95-94h636v-342H105v342Zm761-65v-212h84v212h-84Z" />
    </svg>
  )
}
