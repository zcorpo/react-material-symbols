import type { SVGProps, JSX } from 'react'

export default function StockpotFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-212v-435h616v435H172Zm0-495v-22h217v-59h182v59h217v22H172Z" />
    </svg>
  )
}
