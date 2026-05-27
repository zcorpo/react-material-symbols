import type { SVGProps } from 'react'

export default function BatteryAndroidBoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-292v-376h621L477-374h182l-17 82H92Zm625-28 23-128H632l154-192h17l-23 128h108L734-320h-17Z" />
    </svg>
  )
}
