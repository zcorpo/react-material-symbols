import type { SVGProps, JSX } from 'react'

export default function Grid3x3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305-143v-162H143v-94h162v-162H143v-95h162v-161h94v161h162v-161h95v161h161v95H656v162h161v94H656v162h-95v-162H399v162h-94Zm94-256h162v-162H399v162Z" />
    </svg>
  )
}
