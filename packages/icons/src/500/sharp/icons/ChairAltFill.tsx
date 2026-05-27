import type { SVGProps, JSX } from 'react'

export default function ChairAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192.59-111.87v-378.76h125.98v-84.74H192.59v-273h574.82v273H641.43v84.74h125.98v378.76h-68.37V-231H260.96v119.13h-68.37Zm185.98-378.76h202.86v-84.74H378.57v84.74Z" />
    </svg>
  )
}
