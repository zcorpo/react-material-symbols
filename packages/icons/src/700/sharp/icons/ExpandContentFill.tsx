import type { SVGProps } from 'react'

export default function ExpandContentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M183-183v-274h94v180h180v94H183Zm500-320v-180H503v-94h274v274h-94Z" />
    </svg>
  )
}
