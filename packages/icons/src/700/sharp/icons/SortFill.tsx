import type { SVGProps } from 'react'

export default function SortFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-189v-94h278v94H95Zm0-244v-94h524v94H95Zm0-244v-93h771v93H95Z" />
    </svg>
  )
}
