import type { SVGProps, JSX } from 'react'

export default function SplitscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-518v-348h771v348H95Zm0 423v-347h771v347H95Z" />
    </svg>
  )
}
