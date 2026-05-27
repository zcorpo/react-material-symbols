import type { SVGProps, JSX } from 'react'

export default function BatteryAndroid5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-292v-376h702v376H92Zm462-22h218v-332H554v332Zm277-88v-155h37v155h-37Z" />
    </svg>
  )
}
