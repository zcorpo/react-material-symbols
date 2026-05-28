import type { SVGProps, JSX } from 'react'

export default function RoofingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M333-135v-295h295v295H333ZM71-431l-56-74 465-362 162 126v-85h134v190l170 131-57 74-409-317L71-431Z" />
    </svg>
  )
}
