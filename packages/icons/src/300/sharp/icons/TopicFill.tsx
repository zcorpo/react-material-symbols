import type { SVGProps } from 'react'

export default function TopicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h307.15l65.39 65.39H860V-180H100Zm157.31-164.62h285.38V-390H257.31v45.38Zm0-160h445.38V-550H257.31v45.38Z" />
    </svg>
  )
}
