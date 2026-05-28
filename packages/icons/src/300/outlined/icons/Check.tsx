import type { SVGProps, JSX } from 'react'

export default function Check({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M379.15-258.31 168.62-468.85l32.61-32.23 177.92 177.93 379-379.39 32.62 32.62-411.62 411.61Z" />
    </svg>
  )
}
