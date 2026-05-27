import type { SVGProps, JSX } from 'react'

export default function BrowseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-281h361v281H95Zm409 0v-440h362v440H504ZM95-425v-441h361v441H95Zm409-159v-282h362v282H504Z" />
    </svg>
  )
}
