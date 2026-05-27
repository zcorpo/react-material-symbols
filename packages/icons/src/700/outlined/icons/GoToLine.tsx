import type { SVGProps, JSX } from 'react'

export default function GoToLine({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M413-683v-134h134v134H413Zm0 540v-134h134v134H413Z" />
    </svg>
  )
}
