import type { SVGProps, JSX } from 'react'

export default function LooksTwoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M358.78-277h242.44v-66.22H425v-105.39h176.22V-683H358.78v66.22H535v101.39H358.78V-277ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
