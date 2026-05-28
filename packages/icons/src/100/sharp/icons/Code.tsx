import type { SVGProps, JSX } from 'react'

export default function Code({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-277 116-481l205-204 15 16-188 188 188 188-16 16Zm319 1-15-16 188-188-188-189 16-16 204 204-205 205Z" />
    </svg>
  )
}
