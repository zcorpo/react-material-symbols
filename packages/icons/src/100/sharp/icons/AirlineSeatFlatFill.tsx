import type { SVGProps, JSX } from 'react'

export default function AirlineSeatFlatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M388-452v-176h412v176H388ZM160-344v-22h640v22H160Zm21-129q-21-21-21-53t21-53q21-21 53-21t53 21q21 21 21 53t-21 53q-21 21-53 21t-53-21Z" />
    </svg>
  )
}
