import type { SVGProps, JSX } from 'react'

export default function PlannerBannerAdPtFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-100v-760h600v760H180Zm117.46-147.77h371.62L552.23-404.15 447.62-271.23l-68.47-83.38-81.69 106.84Z" />
    </svg>
  )
}
