import type { SVGProps, JSX } from 'react'

export default function SignalCellularConnectedNoInternet4Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-55 851-851v275H731v576H55Zm756-137v-359h95v359h-95Zm0 137v-94h95v94h-95Z" />
    </svg>
  )
}
