import type { SVGProps } from 'react'

export default function Crop169({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-332v-296h616v296H172Zm22-22h572v-252H194v252Zm0 0v-252 252Z" />
    </svg>
  )
}
