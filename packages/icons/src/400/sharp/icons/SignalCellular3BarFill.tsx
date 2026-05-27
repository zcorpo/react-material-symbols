import type { SVGProps, JSX } from 'react'

export default function SignalCellular3BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-80 800-800v800H80Zm526-60h214v-596L606-522v382Z" />
    </svg>
  )
}
