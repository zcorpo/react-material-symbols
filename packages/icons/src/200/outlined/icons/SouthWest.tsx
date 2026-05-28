import type { SVGProps, JSX } from 'react'

export default function SouthWest({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-220v-358.31h30.77v305.54l499.54-499.54 22 22-499.54 499.54h305.54V-220H220Z" />
    </svg>
  )
}
