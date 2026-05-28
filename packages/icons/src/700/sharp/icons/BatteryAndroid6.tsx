import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid6({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-215v-531h826v531H10Zm586-94h145v-342H596v342Zm270-65v-212h84v212h-84Z" />
    </svg>
  )
}
