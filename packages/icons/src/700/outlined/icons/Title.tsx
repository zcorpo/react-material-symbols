import type { SVGProps } from 'react'

export default function Title({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M413-135v-557H175v-134h611v134H548v557H413Z" />
    </svg>
  )
}
