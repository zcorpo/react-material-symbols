import type { SVGProps } from 'react'

export default function BatteryAndroidFrameFullFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M171-371v-218h544v218H171Zm-79 79v-376h702v376H92Zm22-22h658v-332H114v332Zm717-88v-155h37v155h-37Z" />
    </svg>
  )
}
