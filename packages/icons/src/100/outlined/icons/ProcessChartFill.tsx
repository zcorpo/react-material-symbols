import type { SVGProps, JSX } from 'react'

export default function ProcessChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m146-259-19-9 218-434 19 10-218 433Zm234 0-19-9 218-434 19 10-218 433Zm234 0-19-9 218-434 19 10-218 433Z" />
    </svg>
  )
}
