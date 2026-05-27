import type { SVGProps } from 'react'

export default function TurnSlightLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M537.37-154.02v-301.59l-234.5-234.26v127h-68.13v-243.35h243.11v68.37h-127l234.26 234.5q9.19 9.2 14.79 21.69 5.6 12.49 5.6 26.05v301.59h-68.13Z" />
    </svg>
  )
}
