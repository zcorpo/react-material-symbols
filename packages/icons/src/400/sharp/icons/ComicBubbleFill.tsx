import type { SVGProps } from 'react'

export default function ComicBubbleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m440-916 116 116h164v164l116 116-116 116 129 253-40 40-253-129-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Z" />
    </svg>
  )
}
