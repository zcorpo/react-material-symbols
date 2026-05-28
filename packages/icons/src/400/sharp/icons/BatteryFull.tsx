import type { SVGProps, JSX } from 'react'

export default function BatteryFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-80v-736h120v-64h160v64h120v736H280Z" />
    </svg>
  )
}
