import type { SVGProps, JSX } from 'react'

export default function ViewAgenda({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-204v-219h616v219H172Zm22-22h572v-175H194v175Zm-22-311v-219h616v219H172Zm22-22h572v-175H194v175Zm0 158v175-175Zm0-333v175-175Z" />
    </svg>
  )
}
