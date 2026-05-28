import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid0Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M32.83-234.02v-492.2h806.21v492.2H32.83Zm836.21-149.87v-192.22h58.13v192.22h-58.13Z" />
    </svg>
  )
}
