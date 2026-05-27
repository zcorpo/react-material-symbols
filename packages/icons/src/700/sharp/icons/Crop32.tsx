import type { SVGProps, JSX } from 'react'

export default function Crop32({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-215v-531h771v531H95Zm94-94h582v-342H189v342Zm0 0v-342 342Z" />
    </svg>
  )
}
