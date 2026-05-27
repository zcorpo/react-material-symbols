import type { SVGProps, JSX } from 'react'

export default function TamperDetectionOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M431-255v-314H157v-222h536v252l110-110v251L693-508v253H431Zm-100 43H191l-85-85 14-15 48 48v-180h22v93h25v-138h22v138h25v-118h22v118h25v-88h22v227Z" />
    </svg>
  )
}
