import type { SVGProps } from 'react'

export default function RightPanelOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457-370v-220L346-480l111 110Zm181 176h128v-572H638v572Zm-444 0h422v-572H194v572Zm444 0h128-128Zm-466 22v-616h616v616H172Z" />
    </svg>
  )
}
