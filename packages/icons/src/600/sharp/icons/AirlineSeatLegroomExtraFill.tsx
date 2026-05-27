import type { SVGProps, JSX } from 'react'

export default function AirlineSeatLegroomExtraFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M507-267H60.78v-586h73v513H507v73Zm243.39 152.09L606.86-410H223.78v-443H463v256.78h169.48l165 342.26 106.13-49.26L955-209.13l-204.61 94.22Z" />
    </svg>
  )
}
