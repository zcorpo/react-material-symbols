import type { SVGProps, JSX } from 'react'

export default function VitalSignsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M48-450v-60h213l102 241 232-579 146 338h171v60H699L597-689 364-110 219-450H48Z" />
    </svg>
  )
}
