import type { SVGProps } from 'react'

export default function Crop75({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-175v-611h771v611H95Zm94-94h582v-422H189v422Zm0 0v-422 422Z" />
    </svg>
  )
}
