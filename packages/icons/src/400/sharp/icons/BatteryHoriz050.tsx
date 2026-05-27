import type { SVGProps } from 'react'

export default function BatteryHoriz050({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M144-280v-120H80v-160h64v-120h736v400H144Zm60-60h308v-280H204v280Z" />
    </svg>
  )
}
