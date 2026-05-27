import type { SVGProps } from 'react'

export default function HtmlFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M8-376v-208h24v83h121v-83h24v208h-24v-101H32v101H8Zm312 0v-184h-80v-24h184v24h-80v184h-24Zm167 0v-208h230v208h-24v-184h-79v143h-24v-143h-79v184h-24Zm326 0v-208h24v184h115v24H813Z" />
    </svg>
  )
}
