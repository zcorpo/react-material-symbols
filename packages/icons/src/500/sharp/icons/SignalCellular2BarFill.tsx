import type { SVGProps, JSX } from 'react'

export default function SignalCellular2BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74.02-74.02 812.2-812.2v812.2H74.02Zm449.11-68.13h294.72v-580.22L523.13-427.65v285.5Z" />
    </svg>
  )
}
