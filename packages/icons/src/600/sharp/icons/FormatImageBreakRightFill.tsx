import type { SVGProps, JSX } from 'react'

export default function FormatImageBreakRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-775.48v-79.22H854.7v79.22H105.87Zm333.96 502.92v-414.88H854.7v414.88H439.83ZM105.87-105.87v-78.65H854.7v78.65H105.87Z" />
    </svg>
  )
}
