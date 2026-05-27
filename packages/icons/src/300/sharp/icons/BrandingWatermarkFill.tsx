import type { SVGProps } from 'react'

export default function BrandingWatermarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M413.85-285.54h340.61v-247.23H413.85v247.23ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
