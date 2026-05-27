import type { SVGProps, JSX } from 'react'

export default function ShowChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M126-214.26 74.26-266 380-571.74l159.76 160.52 298-335 47.98 46.74-345.26 390.46L380-468.26l-254 254Z" />
    </svg>
  )
}
