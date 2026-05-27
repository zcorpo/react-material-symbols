import type { SVGProps, JSX } from 'react'

export default function CardTravelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-520h206.08v-129.23h307.61V-680H840v520H120Zm236.85-520h246.07v-98.46H356.85V-680ZM150.77-295.46h658.46v-81.08H150.77v81.08Z" />
    </svg>
  )
}
