import type { SVGProps } from 'react'

export default function StackedLineChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m140-45-70-70 324-324 159 160 298-335 67 65-362 410-162-160L140-45Zm0-299-70-70 324-324 159 160 298-335 67 65-362 410-162-160-254 254Z" />
    </svg>
  )
}
