import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidFrameBoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-292v-376h621l-18 22H114v332h533l-5 22H92Zm625-28 23-128H632l154-192h17l-23 128h108L734-320h-17Zm-546-51v-218h479L475-371H171Z" />
    </svg>
  )
}
