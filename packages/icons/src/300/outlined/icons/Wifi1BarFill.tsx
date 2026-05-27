import type { SVGProps, JSX } from 'react'

export default function Wifi1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M428.54-158.62q-22-22-22-51.46t22-51.46q22-22 51.46-22t51.46 22q22 22 22 51.46t-22 51.46q-22 22-51.46 22t-51.46-22Z" />
    </svg>
  )
}
