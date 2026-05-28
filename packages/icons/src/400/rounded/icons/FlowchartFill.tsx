import type { SVGProps, JSX } from 'react'

export default function FlowchartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M614-160v-83H450v-207H345v83H80v-226h265v83h105v-207h164v-83h266v226H614v-83H510v354h104v-82h266v225H614Z" />
    </svg>
  )
}
