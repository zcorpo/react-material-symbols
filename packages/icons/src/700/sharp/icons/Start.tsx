import type { SVGProps, JSX } from 'react'

export default function Start({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-223v-514h94v514H55Zm586 8-68-66 152-152H248v-94h477L575-679l66-66 265 265-265 265Z" />
    </svg>
  )
}
