import type { SVGProps, JSX } from 'react'

export default function BottomPanelOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M331-525.87h298L480-675.44 331-525.87ZM185.09-185.09h589.82v-138.52H185.09v138.52Zm0-218.3h589.82v-371.52H185.09v371.52Zm0 79.78v138.52-138.52Zm-79.22 217.74V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
