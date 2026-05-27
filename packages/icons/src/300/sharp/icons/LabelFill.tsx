import type { SVGProps, JSX } from 'react'

export default function LabelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h533.31l227.3 300-226.3 300H100Z" />
    </svg>
  )
}
