import type { SVGProps } from 'react'

export default function SignalCellularAltOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M813-61 550-324v164H450v-264L61-813l43-43 752 752-43 43Zm-13-185L700-346v-454h100v554Zm-600 86v-240h100v240H200Z" />
    </svg>
  )
}
