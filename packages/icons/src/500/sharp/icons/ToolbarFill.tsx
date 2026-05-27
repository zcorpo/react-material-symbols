import type { SVGProps, JSX } from 'react'

export default function ToolbarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-634.2v-212.02h732.2v212.02h-732.2Zm0 520.18v-451.81h732.2v451.81h-732.2Z" />
    </svg>
  )
}
