import type { SVGProps } from 'react'

export default function SpaceBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-412v-188h22v166h492v-166h22v188H212Z" />
    </svg>
  )
}
