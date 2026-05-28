import type { SVGProps, JSX } from 'react'

export default function DensitySmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-55v-94h771v94H95Zm0-252v-94h771v94H95Zm0-252v-94h771v94H95Zm0-252v-95h771v95H95Z" />
    </svg>
  )
}
