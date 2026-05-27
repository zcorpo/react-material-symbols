import type { SVGProps } from 'react'

export default function Wifi1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M417-154q-27-27-27-63t27-63q27-27 63-27t63 27q27 27 27 63t-27 63q-27 27-63 27t-63-27Z" />
    </svg>
  )
}
