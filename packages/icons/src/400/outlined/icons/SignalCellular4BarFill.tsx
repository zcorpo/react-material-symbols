import type { SVGProps } from 'react'

export default function SignalCellular4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-80 800-800v800H80Z" />
    </svg>
  )
}
