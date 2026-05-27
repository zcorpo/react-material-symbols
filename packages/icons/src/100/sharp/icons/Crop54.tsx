import type { SVGProps, JSX } from 'react'

export default function Crop54({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-212v-536h616v536H172Zm22-22h572v-492H194v492Zm0 0v-492 492Z" />
    </svg>
  )
}
