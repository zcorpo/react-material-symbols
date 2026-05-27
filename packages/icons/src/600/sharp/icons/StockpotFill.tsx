import type { SVGProps } from 'react'

export default function StockpotFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-145.87v-504.09H854.7v504.09H105.87Zm0-544.09v-80.78h256.22v-83.96h235.82v83.96H854.7v80.78H105.87Z" />
    </svg>
  )
}
