import type { SVGProps } from 'react'

export default function BatteryAndroid6Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-292v-376h702v376H92Zm542-22h138v-332H634v332Zm197-88v-155h37v155h-37Z" />
    </svg>
  )
}
