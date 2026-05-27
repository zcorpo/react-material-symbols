import type { SVGProps, JSX } from 'react'

export default function TableRowsNarrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-287v-163h771v163H95Zm0-223v-163h771v163H95Zm0-223v-163h771v163H95Zm0 668v-162h771v162H95Z" />
    </svg>
  )
}
