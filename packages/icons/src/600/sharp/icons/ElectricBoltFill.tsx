import type { SVGProps, JSX } from 'react'

export default function ElectricBoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m271.87-64.87 164.22-301.91-347.18-42.26L615.57-895.7h72.56L521.65-590.39l348.87 41.69L344.43-64.87h-72.56Z" />
    </svg>
  )
}
