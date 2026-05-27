import type { SVGProps } from 'react'

export default function BookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194.02-110.91v-740.31h572.2v740.31L480-233.34 194.02-110.91Z" />
    </svg>
  )
}
