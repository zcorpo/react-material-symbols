import type { SVGProps, JSX } from 'react'

export default function PergolaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-811h94v80h582v-80h95v811h-95v-442H189v442H95Zm338 0v-111H314v-94h332v94H527v111h-94Z" />
    </svg>
  )
}
