import type { SVGProps, JSX } from 'react'

export default function ArrowOutwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m241-279-15-15 417-418H253v-22h428v428h-22v-390L241-279Z" />
    </svg>
  )
}
