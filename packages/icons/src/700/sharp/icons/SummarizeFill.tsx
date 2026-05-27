import type { SVGProps, JSX } from 'react'

export default function SummarizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M273-615h72v-72h-72v72Zm0 171h72v-72h-72v72Zm0 171h72v-72h-72v72ZM95-95v-771h547l224 224v547H95Zm493-676v183h183L588-771Z" />
    </svg>
  )
}
