import type { SVGProps, JSX } from 'react'

export default function ShelfPosition({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-96v-770h771v770H95Zm94-94h582v-134H189v134Zm457-194h125v-387H646v387Zm-457 0h125v-387H189v387Zm185 0h212v-387H374v387Z" />
    </svg>
  )
}
