import type { SVGProps } from 'react'

export default function VideoStableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm587.92-45.39L784-592.46 273.46-734.61 177-368.69l510.92 143.3Z" />
    </svg>
  )
}
