import type { SVGProps, JSX } from 'react'

export default function CheckIndeterminateSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234.02-445.93v-68.14h492.2v68.14h-492.2Z" />
    </svg>
  )
}
