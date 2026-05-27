import type { SVGProps, JSX } from 'react'

export default function BatteryChargingFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M660-87v-113h-80l120-192v112h80L660-87Zm-320-53Zm-60 60v-736h120v-64h160v64h120v363q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28H280Z" />
    </svg>
  )
}
