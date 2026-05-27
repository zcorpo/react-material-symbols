import type { SVGProps, JSX } from 'react'

export default function Margin({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-94h582v-582H189v582Zm0 0v-582 582Zm82-410v-90h90v90h-90Zm164-1 1-91 91 1-1 91-91-1Zm165 1v-90h90v90h-90ZM271-435v-90h90v90h-90Zm164-1 1-91 91 1-1 91-91-1Zm165 1v-90h90v90h-90Z" />
    </svg>
  )
}
