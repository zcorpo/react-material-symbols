import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMosaicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M454.39-105.87H105.87V-854.7h348.52v748.83Zm53.22-401.74V-854.7H854.7v347.09H507.61Zm0 401.74v-348.52H854.7v348.52H507.61Z" />
    </svg>
  )
}
