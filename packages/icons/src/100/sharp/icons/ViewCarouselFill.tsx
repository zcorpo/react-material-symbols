import type { SVGProps, JSX } from 'react'

export default function ViewCarouselFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-334v-293h120v293H132Zm186 82v-456h324v456H318Zm390-82v-293h120v293H708Z" />
    </svg>
  )
}
