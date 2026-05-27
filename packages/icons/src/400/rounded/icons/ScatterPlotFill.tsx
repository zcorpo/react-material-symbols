import type { SVGProps, JSX } from 'react'

export default function ScatterPlotFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M587-163q-43-43-43-105t43-105q43-43 105-43t105 43q43 43 43 105t-43 105q-43 43-105 43t-105-43ZM163-293q-43-43-43-105t43-105q43-43 105-43t105 43q43 43 43 105t-43 105q-43 43-105 43t-105-43Zm169-334q-43-43-43-105t43-105q43-43 105-43t105 43q43 43 43 105t-43 105q-43 43-105 43t-105-43Z" />
    </svg>
  )
}
