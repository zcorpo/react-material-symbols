import type { SVGProps, JSX } from 'react'

export default function SignalCellularConnectedNoInternet0Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74.02-74.02 812.2-812.2v236.96h-68.37v-71.63L237.87-142.15h499.98v68.13H74.02Zm743.83-124.07v-371.17h68.37v371.17h-68.37Zm68.37 55.94v68.13h-68.37v-68.13h68.37Z" />
    </svg>
  )
}
