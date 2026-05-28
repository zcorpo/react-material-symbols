import type { SVGProps, JSX } from 'react'

export default function TabletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-180v-600h840v600H60Zm133.46-45.39h573.08v-509.22H193.46v509.22Z" />
    </svg>
  )
}
