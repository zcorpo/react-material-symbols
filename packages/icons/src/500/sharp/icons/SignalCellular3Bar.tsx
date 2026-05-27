import type { SVGProps } from 'react'

export default function SignalCellular3Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74.02-74.02 812.2-812.2v812.2H74.02Zm529.11-68.13h214.72v-580.22L603.13-507.65v365.5Z" />
    </svg>
  )
}
