import type { SVGProps, JSX } from 'react'

export default function Stairs2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-220v-45.39h238.04v-237.3h238.04V-740H860v45.39H621.96v237.3H383.92V-220H100Z" />
    </svg>
  )
}
