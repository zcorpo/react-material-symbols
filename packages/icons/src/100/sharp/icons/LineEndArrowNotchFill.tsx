import type { SVGProps } from 'react'

export default function LineEndArrowNotchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m502-313 89-156H109v-22h482l-89-156 263 167-263 167Z" />
    </svg>
  )
}
