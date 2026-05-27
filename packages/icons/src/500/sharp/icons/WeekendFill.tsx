import type { SVGProps, JSX } from 'react'

export default function WeekendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M236.02-383.02v-222.15h-87.13v-194.59h662.22v194.59h-86.89v222.15h-488.2ZM37.13-159.76v-385.65h138.89v210.19h607.72v-210.19h139.13v385.65H37.13Z" />
    </svg>
  )
}
