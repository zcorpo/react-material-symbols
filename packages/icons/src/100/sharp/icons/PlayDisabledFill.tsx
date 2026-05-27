import type { SVGProps } from 'react'

export default function PlayDisabledFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M589-432 376-643v-24l292 186-79 49Zm94 228L508-379l-132 84v-216L202-684l16-16 480 480-15 16Z" />
    </svg>
  )
}
