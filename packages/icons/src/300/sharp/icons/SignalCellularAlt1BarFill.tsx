import type { SVGProps } from 'react'

export default function SignalCellularAlt1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-180v-200h77.69v200H220Z" />
    </svg>
  )
}
