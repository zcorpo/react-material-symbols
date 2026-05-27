import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidPlusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M32.83-234.02v-492.2h636.21v152.15h-120v188.14h120v151.91H32.83Zm696.21-91.91v-120h-120v-68.14h120v-120h68.13v120h120v68.14h-120v120h-68.13Z" />
    </svg>
  )
}
