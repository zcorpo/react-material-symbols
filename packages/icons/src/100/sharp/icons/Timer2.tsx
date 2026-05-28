import type { SVGProps, JSX } from 'react'

export default function Timer2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M349-246v-242h286v-210H349v-16h302v242H365v210h286v16H349Z" />
    </svg>
  )
}
