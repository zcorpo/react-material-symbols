import type { SVGProps } from 'react'

export default function Crop54({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-135v-691h771v691H95Zm94-94h582v-502H189v502Zm0 0v-502 502Z" />
    </svg>
  )
}
