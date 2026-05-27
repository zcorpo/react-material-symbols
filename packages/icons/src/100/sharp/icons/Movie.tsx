import type { SVGProps, JSX } from 'react'

export default function Movie({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h54l52 106h123l-52-106h83l52 106h123l-52-106h82l53 106h123l-53-106h108v536H132Zm22-408v386h652v-386H154Zm0 0v386-386Z" />
    </svg>
  )
}
