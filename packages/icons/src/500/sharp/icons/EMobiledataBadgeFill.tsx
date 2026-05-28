import type { SVGProps, JSX } from 'react'

export default function EMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319.52-278.57h320.96v-62.86H382.39v-107.14h218.09v-62.86H382.39v-107.14h258.09v-62.86H319.52v402.86Zm-205.5 164.55v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}
