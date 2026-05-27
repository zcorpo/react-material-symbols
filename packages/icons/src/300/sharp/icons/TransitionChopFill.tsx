import type { SVGProps, JSX } from 'react'

export default function TransitionChopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm56.46-45.39h658.15v-509.22H604.85l95.3 367.84-543.69 141.38Z" />
    </svg>
  )
}
