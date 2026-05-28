import type { SVGProps, JSX } from 'react'

export default function AddCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-528h652v-70H154v70Zm638 422v-120H672v-22h120v-120h22v120h120v22H814v120h-22ZM132-212v-536h696v306h-36q-80.51 0-137.26 56.74Q598-328.51 598-248v36H132Z" />
    </svg>
  )
}
