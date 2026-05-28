import type { SVGProps, JSX } from 'react'

export default function DensityLarge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-45.39h680V-140H140Zm0-634.61V-820h680v45.39H140Z" />
    </svg>
  )
}
