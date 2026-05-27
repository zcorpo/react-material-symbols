import type { SVGProps } from 'react'

export default function HomeHealthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M449-309h62v-100h100v-62H511v-100h-62v100H349v62h100v100ZM212-172v-402l268-202 268 202v402H212Z" />
    </svg>
  )
}
