import type { SVGProps } from 'react'

export default function ShowChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m126-196-70-70 324-324 159 159 298-335 67 65-362 411-162-160-254 254Z" />
    </svg>
  )
}
