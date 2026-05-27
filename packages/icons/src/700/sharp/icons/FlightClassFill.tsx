import type { SVGProps } from 'react'

export default function FlightClassFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M461-454v-372h279v372H461Zm279 205H301.54L175-653v-173h94v149l102 333h369v95ZM298-95v-94h442v94H298Z" />
    </svg>
  )
}
