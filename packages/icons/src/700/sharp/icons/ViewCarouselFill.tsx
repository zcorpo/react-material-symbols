import type { SVGProps, JSX } from 'react'

export default function ViewCarouselFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-272v-417h140v417H55Zm200 97v-611h443v611H255Zm503-97v-417h148v417H758Z" />
    </svg>
  )
}
