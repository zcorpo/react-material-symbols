import type { SVGProps, JSX } from 'react'

export default function ArrowUpwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M465.85-269.38v-410.77L289.69-505.46l-22-22.23 212.54-212.54 213.31 212.54-22 22-174.92-174.93v411.24h-30.77Z" />
    </svg>
  )
}
