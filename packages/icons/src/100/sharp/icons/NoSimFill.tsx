import type { SVGProps, JSX } from 'react'

export default function NoSimFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M748-301 321-727l101-101h326v527Zm76 213L695-217l15-16 38 38v63H212v-485l42-41-153-153 16-16 723 723-16 16Z" />
    </svg>
  )
}
