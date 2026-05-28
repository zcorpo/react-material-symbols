import type { SVGProps, JSX } from 'react'

export default function Crop75({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-252v-456h616v456H172Zm22-22h572v-412H194v412Zm0 0v-412 412Z" />
    </svg>
  )
}
