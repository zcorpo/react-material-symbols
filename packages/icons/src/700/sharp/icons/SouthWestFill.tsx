import type { SVGProps } from 'react'

export default function SouthWestFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M183-183v-430h94v270l481-481 66 66-481 481h270v94H183Z" />
    </svg>
  )
}
