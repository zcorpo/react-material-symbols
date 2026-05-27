import type { SVGProps } from 'react'

export default function SplitscreenLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M204-172v-616h219v616H204Zm333 0v-616h219v616H537Zm197-594H559v572h175v-572Z" />
    </svg>
  )
}
