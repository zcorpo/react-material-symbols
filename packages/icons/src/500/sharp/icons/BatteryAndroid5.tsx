import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid5({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M32.83-234.02v-492.2h806.21v492.2H32.83Zm508.37-68.13h229.47v-355.7H541.2v355.7Zm327.84-81.74v-192.22h58.13v192.22h-58.13Z" />
    </svg>
  )
}
