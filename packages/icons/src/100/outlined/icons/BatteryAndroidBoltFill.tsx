import type { SVGProps } from 'react'

export default function BatteryAndroidBoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M171-292q-33 0-56-23t-23-56v-218q0-33 23-56t56-23h542L477-374h182l-17 82H171Zm546-28 23-128H632l154-192h17l-23 128h108L734-320h-17Z" />
    </svg>
  )
}
