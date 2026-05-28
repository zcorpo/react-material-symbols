import type { SVGProps, JSX } from 'react'

export default function TransitionSlideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-180v-600h220.77v600H60Zm308.46 0v-600H900v600H368.46Z" />
    </svg>
  )
}
