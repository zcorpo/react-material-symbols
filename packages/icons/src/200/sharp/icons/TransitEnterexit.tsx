import type { SVGProps, JSX } from 'react'

export default function TransitEnterexit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269.23-264.62v-351h59.62v247.39L647-686.38l44 44.76-317.38 317.39h246.61v59.61h-351Z" />
    </svg>
  )
}
