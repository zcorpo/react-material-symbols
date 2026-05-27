import type { SVGProps, JSX } from 'react'

export default function Wifi1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M447-166q-14-14-14-33t14-33q14-14 33-14t33 14q14 14 14 33t-14 33q-14 14-33 14t-33-14Z" />
    </svg>
  )
}
