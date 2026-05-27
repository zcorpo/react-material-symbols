import type { SVGProps, JSX } from 'react'

export default function BoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m366.15-124.62 40-275.38h-170l299.23-431.54h18.47L514.62-520h200l-330 395.38h-18.47Z" />
    </svg>
  )
}
