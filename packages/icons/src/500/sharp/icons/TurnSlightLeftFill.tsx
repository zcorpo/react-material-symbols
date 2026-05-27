import type { SVGProps, JSX } from 'react'

export default function TurnSlightLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M537.37-154.02v-301.59l-234.5-234.26v127h-68.13v-243.35h243.11v68.37h-127L605.5-482.96v328.94h-68.13Z" />
    </svg>
  )
}
