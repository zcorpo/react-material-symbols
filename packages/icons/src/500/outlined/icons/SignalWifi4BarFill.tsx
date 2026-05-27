import type { SVGProps } from 'react'

export default function SignalWifi4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-106.13 0-600q98.76-94.96 220.64-149.03Q342.52-803.11 480-803.11q137.48 0 259.36 54.08Q861.24-694.96 960-600L480-106.13Z" />
    </svg>
  )
}
