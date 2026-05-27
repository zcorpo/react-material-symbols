import type { SVGProps, JSX } from 'react'

export default function BatteryFullAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M138.02-272.59v-123.34h-64v-168.14h64v-123.34h748.2v414.82h-748.2Z" />
    </svg>
  )
}
