import type { SVGProps } from 'react'

export default function HtmlFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M8-376v-208h24v83h121v-83h24v208h-24v-101H32v101H8Zm312 0v-184h-80v-24h184v24h-80v184h-24Zm167 0v-182q0-10.9 7.2-18.45Q501.4-584 513-584h178q11.6 0 18.8 7.55Q717-568.9 717-558v182h-24v-184h-79v143h-24v-143h-79v184h-24Zm326 0v-208h24v184h115v24H813Z" />
    </svg>
  )
}
