import type { SVGProps, JSX } from 'react'

export default function NetworkCellFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-100 760-760v760H100Zm580.23-45.39h134.38V-751L680.23-616.62v471.23Z" />
    </svg>
  )
}
