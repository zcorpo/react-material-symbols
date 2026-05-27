import type { SVGProps } from 'react'

export default function ExpandContentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-200v-240h60v180h180v60H200Zm500-320v-180H520v-60h240v240h-60Z" />
    </svg>
  )
}
