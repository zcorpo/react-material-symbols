import type { SVGProps, JSX } from 'react'

export default function ViewStreamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-185.87v-254.52H854.7v254.52H105.87Zm0-333.74V-774.7H854.7v255.09H105.87Z" />
    </svg>
  )
}
