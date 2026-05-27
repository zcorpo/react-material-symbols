import type { SVGProps } from 'react'

export default function LineStartSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M456.92-323.08H143.08v-313.84h313.84v141.54h380v30.76h-380v141.54Z" />
    </svg>
  )
}
