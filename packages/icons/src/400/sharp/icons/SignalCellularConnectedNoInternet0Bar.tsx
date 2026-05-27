import type { SVGProps } from 'react'

export default function SignalCellularConnectedNoInternet0Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-80 800-800v225h-60v-80L224-140h516v60H80Zm740-120v-375h60v375h-60Zm60 60v60h-60v-60h60Z" />
    </svg>
  )
}
