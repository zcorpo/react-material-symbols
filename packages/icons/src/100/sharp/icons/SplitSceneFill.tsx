import type { SVGProps, JSX } from 'react'

export default function SplitSceneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-212v-536h203v536H172Zm297 80v-696h22v80h297v536H491v80h-22Z" />
    </svg>
  )
}
