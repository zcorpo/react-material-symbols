import type { SVGProps } from 'react'

export default function VerticalAlignBottom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-22h536v22H212Zm268-132L318-466l16-16 135 135v-441h22v441l134-134 16 16-161 161Z" />
    </svg>
  )
}
