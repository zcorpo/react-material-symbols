import type { SVGProps, JSX } from 'react'

export default function SignalCellularAlt1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M182-135v-216h135v216H182Z" />
    </svg>
  )
}
