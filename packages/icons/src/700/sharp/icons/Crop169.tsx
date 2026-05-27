import type { SVGProps } from 'react'

export default function Crop169({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-255v-451h771v451H95Zm94-94h582v-262H189v262Zm0 0v-262 262Z" />
    </svg>
  )
}
