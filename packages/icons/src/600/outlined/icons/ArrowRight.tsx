import type { SVGProps, JSX } from 'react'

export default function ArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M390.39-256.82v-446.36L613.57-480 390.39-256.82Z" />
    </svg>
  )
}
