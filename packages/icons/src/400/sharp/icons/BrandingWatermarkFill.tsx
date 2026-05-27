import type { SVGProps } from 'react'

export default function BrandingWatermarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M405-274h361v-258H405v258ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
