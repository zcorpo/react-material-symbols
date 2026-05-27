import type { SVGProps, JSX } from 'react'

export default function ModeCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M175.38-280q-23.23 0-39.3-16.08Q120-312.15 120-335.38v-449.24q0-23.23 16.08-39.3Q152.15-840 175.38-840h609.24q23.23 0 39.3 16.08Q840-807.85 840-784.62v627.7L716.92-280H175.38Z" />
    </svg>
  )
}
