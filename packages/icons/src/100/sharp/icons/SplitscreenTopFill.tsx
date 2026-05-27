import type { SVGProps } from 'react'

export default function SplitscreenTopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-537v-219h616v219H172Zm0 333v-219h616v219H172Zm22-22h572v-175H194v175Z" />
    </svg>
  )
}
