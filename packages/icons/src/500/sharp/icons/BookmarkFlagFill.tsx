import type { SVGProps, JSX } from 'react'

export default function BookmarkFlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M379.98-405h53.59v-117.85h174.28l-57.45-76.91 57.45-76.67H379.98V-405ZM194.02-110.91v-740.31h572.2v740.31L480-233.34 194.02-110.91Z" />
    </svg>
  )
}
