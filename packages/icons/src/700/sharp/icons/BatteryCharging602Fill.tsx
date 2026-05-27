import type { SVGProps, JSX } from 'react'

export default function BatteryCharging602Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M73-273v-414h555l-75 94H447v226h126l-18 94H73Zm585 0 29-160H545l204-254h33l-29 160h142L691-273h-33Z" />
    </svg>
  )
}
