import type { SVGProps, JSX } from 'react'

export default function SignalWifi4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-120 0-600q99-94 221-147t259-53q137 0 259 53t221 147L480-120Z" />
    </svg>
  )
}
