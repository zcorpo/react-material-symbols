import type { SVGProps } from 'react'

export default function SouthWest({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M195.93-195.93v-404.14h68.14v288.27L758-805.74 805.74-758 311.8-264.07h288.27v68.14H195.93Z" />
    </svg>
  )
}
