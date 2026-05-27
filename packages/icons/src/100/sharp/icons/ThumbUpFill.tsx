import type { SVGProps } from 'react'

export default function ThumbUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M282-172v-414l242-240 18 14-43 226h369v111L739-172H282Zm-150 0v-414h128v414H132Z" />
    </svg>
  )
}
