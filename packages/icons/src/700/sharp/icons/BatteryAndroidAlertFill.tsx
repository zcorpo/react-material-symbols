import type { SVGProps } from 'react'

export default function BatteryAndroidAlertFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-215v-531h723v407q0 51 35 87t88 37H10Zm783-232v-240h94v240h-94Zm13.5 140.32q-13.5-13.67-13.5-33.5 0-19.82 13.68-33.32 13.67-13.5 33.5-13.5 19.82 0 33.32 13.68 13.5 13.67 13.5 33.5 0 19.82-13.68 33.32-13.67 13.5-33.5 13.5-19.82 0-33.32-13.68Z" />
    </svg>
  )
}
