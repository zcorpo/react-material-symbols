import type { SVGProps, JSX } from 'react'

export default function CurrencyYuanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-172v-252H266v-22h198L247-788h27l206 326 206-326h27L496-446h198v22H491v252h-22Z" />
    </svg>
  )
}
