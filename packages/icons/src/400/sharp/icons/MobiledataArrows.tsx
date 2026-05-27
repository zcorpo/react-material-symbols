import type { SVGProps } from 'react'

export default function MobiledataArrows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M318-578h60v342l79-79 43 43-152 152-152-152 43-43 79 79v-342Zm313 207h-60v-353l-79 79-43-43 152-152 152 152-43 43-79-79v353Z" />
    </svg>
  )
}
