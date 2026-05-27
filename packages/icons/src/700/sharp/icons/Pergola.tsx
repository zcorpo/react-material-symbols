import type { SVGProps } from 'react'

export default function Pergola({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-811h94v80h582v-80h95v811h-95v-442H189v442H95Zm94-536h582v-100H189v100ZM433-95v-111H314v-94h332v94H527v111h-94ZM189-631v-100 100Z" />
    </svg>
  )
}
