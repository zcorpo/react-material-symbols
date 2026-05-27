import type { SVGProps } from 'react'

export default function FormatStrikethroughFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-403v-61h851v61H55Zm358-121v-168H175v-134h611v134H548v168H413Zm0 389v-208h135v208H413Z" />
    </svg>
  )
}
