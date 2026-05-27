import type { SVGProps } from 'react'

export default function Crop32Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-234.02v-492.2h732.2v492.2h-732.2Z" />
    </svg>
  )
}
