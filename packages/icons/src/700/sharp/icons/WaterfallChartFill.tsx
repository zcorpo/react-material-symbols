import type { SVGProps } from 'react'

export default function WaterfallChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-135v-264h136v264H95Zm212-255v-223h135v223H307Zm211-214v-222h136v222H518Zm211 469v-691h137v691H729Z" />
    </svg>
  )
}
