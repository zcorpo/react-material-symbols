import type { SVGProps } from 'react'

export default function Shift({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M304.85-105v-310H89l391-489 392 489H655v310H304.85ZM400-200h161v-310h111L480-755 288-510h112v310Zm80-310Z" />
    </svg>
  )
}
