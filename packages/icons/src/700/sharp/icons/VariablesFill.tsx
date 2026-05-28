import type { SVGProps, JSX } from 'react'

export default function VariablesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-255v-451h771v451H95Z" />
    </svg>
  )
}
