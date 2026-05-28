import type { SVGProps, JSX } from 'react'

export default function Dehaze({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-697.17v-79.22H854.7v79.22H105.87Zm0 513.56v-79.22H854.7v79.22H105.87Zm0-256.78v-79.22H854.7v79.22H105.87Z" />
    </svg>
  )
}
