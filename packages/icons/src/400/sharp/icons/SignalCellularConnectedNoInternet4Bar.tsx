import type { SVGProps } from 'react'

export default function SignalCellularConnectedNoInternet4Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-80 800-800v225H740v575H80Zm740-120v-375h60v375h-60Zm0 120v-60h60v60h-60Z" />
    </svg>
  )
}
