import type { SVGProps, JSX } from 'react'

export default function BottomDrawerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-676v332l52-51h479l51 51v-332H189Z" />
    </svg>
  )
}
