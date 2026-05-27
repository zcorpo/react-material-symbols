import type { SVGProps, JSX } from 'react'

export default function Stat1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m282-347.5-47.74-47.74L480-640.98l245.74 245.74L678-347.5l-198-198-198 198Z" />
    </svg>
  )
}
