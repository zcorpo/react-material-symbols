import type { SVGProps, JSX } from 'react'

export default function PageMenuIos({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-22h393v22H172Zm0-128v-22h616v22H172Zm0-128v-360h616v360H172Zm22-22h572v-316H194v316Zm0 0v-316 316Z" />
    </svg>
  )
}
