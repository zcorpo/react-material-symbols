import type { SVGProps } from 'react'

export default function BatteryAndroid3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-215v-531h826v531H10Zm375-94h356v-342H385v342Zm481-65v-212h84v212h-84Z" />
    </svg>
  )
}
