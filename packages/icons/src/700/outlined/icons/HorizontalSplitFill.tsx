import type { SVGProps } from 'react'

export default function HorizontalSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-177v-320h771v320H95Zm0-369v-94h771v94H95Zm0-143v-94h771v94H95Z" />
    </svg>
  )
}
