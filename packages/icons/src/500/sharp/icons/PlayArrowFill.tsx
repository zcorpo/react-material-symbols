import type { SVGProps, JSX } from 'react'

export default function PlayArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M314.02-192v-582l457.22 291-457.22 291Z" />
    </svg>
  )
}
