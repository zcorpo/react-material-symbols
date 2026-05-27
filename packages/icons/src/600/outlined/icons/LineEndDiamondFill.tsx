import type { SVGProps, JSX } from 'react'

export default function LineEndDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-188.13 347.74-440.39H70.39v-79.22h277.35L600-771.87 891.87-480 600-188.13Z" />
    </svg>
  )
}
