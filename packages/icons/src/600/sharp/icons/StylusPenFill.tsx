import type { SVGProps, JSX } from 'react'

export default function StylusPenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m229.43-323.17 104.66-379.92h66v-60l62.39-131.61h34.48l62.95 131.61v60h66L730-323.17H229.43Zm-83.56 217.3 47.48-117.3h572.74l48.61 117.3H145.87Z" />
    </svg>
  )
}
