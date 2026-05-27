import type { SVGProps, JSX } from 'react'

export default function Ad({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm85-85h600v-508H180v508Z" />
    </svg>
  )
}
