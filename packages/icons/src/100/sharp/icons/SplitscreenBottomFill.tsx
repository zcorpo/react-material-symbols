import type { SVGProps, JSX } from 'react'

export default function SplitscreenBottomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-204v-219h616v219H172Zm0-333v-219h616v219H172Zm594-197H194v175h572v-175Z" />
    </svg>
  )
}
