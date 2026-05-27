import type { SVGProps, JSX } from 'react'

export default function BottomDrawerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-680h680v680H140Zm45.39-634.61v376.15L249-462.08h462l63.61 63.62v-376.15H185.39Z" />
    </svg>
  )
}
