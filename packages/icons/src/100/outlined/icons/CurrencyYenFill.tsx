import type { SVGProps } from 'react'

export default function CurrencyYenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-172v-141H266v-22h203v-128H266v-22h189L263-788h27l190 301 190-301h27L505-485h189v22H491v128h203v22H491v141h-22Z" />
    </svg>
  )
}
