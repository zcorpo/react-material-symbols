import type { SVGProps, JSX } from 'react'

export default function SouthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-80 200-360l42-42 208 208v-686h60v686l208-208 42 42L480-80Z" />
    </svg>
  )
}
