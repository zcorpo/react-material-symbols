import type { SVGProps } from 'react'

export default function BatteryPlus({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-140Zm-60 60v-736h120v-64h160v64h120v363q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28H280Zm375 0v-125H535v-60h120v-120h60v120h125v60H715v125h-60Z" />
    </svg>
  )
}
