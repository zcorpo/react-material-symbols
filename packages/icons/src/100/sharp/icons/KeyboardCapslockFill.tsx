import type { SVGProps, JSX } from 'react'

export default function KeyboardCapslockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M266-266v-22h428v22H266Zm214-434 203 202-17 17-186-187-185 185-16-16 201-201Z" />
    </svg>
  )
}
