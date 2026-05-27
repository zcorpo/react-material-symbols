import type { SVGProps } from 'react'

export default function BatteryAndroid3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-292v-376h702v376H92Zm302-22h378v-332H394v332Zm437-88v-155h37v155h-37Z" />
    </svg>
  )
}
