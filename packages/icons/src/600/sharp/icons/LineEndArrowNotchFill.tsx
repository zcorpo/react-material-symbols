import type { SVGProps } from 'react'

export default function LineEndArrowNotchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m431.52-184.74 143.39-255.65H80.39v-79.22h494.52L431.52-775.26 895.83-480 431.52-184.74Z" />
    </svg>
  )
}
