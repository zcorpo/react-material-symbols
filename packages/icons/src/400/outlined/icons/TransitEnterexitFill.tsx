import type { SVGProps, JSX } from 'react'

export default function TransitEnterexitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-240v-401h95v232l312-312 74 74-312 312h232v95H240Z" />
    </svg>
  )
}
