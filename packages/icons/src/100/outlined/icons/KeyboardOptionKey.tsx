import type { SVGProps, JSX } from 'react'

export default function KeyboardOptionKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M608-226 331-712H172v-22h171l277 486h168v22H608Zm21-486v-22h159v22H629Z" />
    </svg>
  )
}
