import type { SVGProps, JSX } from 'react'

export default function InkMarkerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m241-97-40-40-76 76-65-66 76-76-40-40 614-615 147 147L241-97Zm194-400L181-243l60 60 254-254-60-60Z" />
    </svg>
  )
}
