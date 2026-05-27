import type { SVGProps, JSX } from 'react'

export default function LayersFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-242 204-456l17-14 259 200 259-200 17 14-276 214Zm0-123L204-579l276-214 276 214-276 214Z" />
    </svg>
  )
}
