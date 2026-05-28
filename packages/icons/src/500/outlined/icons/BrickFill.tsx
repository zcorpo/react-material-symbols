import type { SVGProps, JSX } from 'react'

export default function BrickFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02v-481.41H192v-170.79h237.91v170.79h100.42v-170.79h237.91v170.79h117.98v481.41H74.02Z" />
    </svg>
  )
}
