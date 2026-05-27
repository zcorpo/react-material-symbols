import type { SVGProps } from 'react'

export default function StockpotFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-135v-508h771v508H95Zm0-548v-96h261v-87h248v87h262v96H95Z" />
    </svg>
  )
}
