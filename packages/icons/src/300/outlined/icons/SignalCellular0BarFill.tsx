import type { SVGProps, JSX } from 'react'

export default function SignalCellular0BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-100 760-760v760H100Zm109-45.39h605.61V-751L209-145.39Z" />
    </svg>
  )
}
