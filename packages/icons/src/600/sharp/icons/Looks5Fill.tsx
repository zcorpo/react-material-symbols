import type { SVGProps, JSX } from 'react'

export default function Looks5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M358.78-277h242.44v-238.39H425v-101.39h176.22V-683H358.78v234.39H535v105.39H358.78V-277ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
