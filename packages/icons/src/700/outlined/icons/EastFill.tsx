import type { SVGProps, JSX } from 'react'

export default function EastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m600-174-66-67 193-192H56v-94h671L533-720l67-66 306 306-306 306Z" />
    </svg>
  )
}
