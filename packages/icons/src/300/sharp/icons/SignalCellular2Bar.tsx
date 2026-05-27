import type { SVGProps, JSX } from 'react'

export default function SignalCellular2Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-100 760-760v760H100Zm410.23-45.39h304.38V-751L510.23-446.62v301.23Z" />
    </svg>
  )
}
