import type { SVGProps, JSX } from 'react'

export default function StraightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-172v-576l-99 99-15-14 125-125 125 125-15 14-99-99v576h-22Z" />
    </svg>
  )
}
