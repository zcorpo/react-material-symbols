import type { SVGProps } from 'react'

export default function SelectCheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h759l-95 95H189v582h582v-325l95-95v514H95Zm372-199L245-516l50-50 172 172 392-392 49 51-441 441Z" />
    </svg>
  )
}
