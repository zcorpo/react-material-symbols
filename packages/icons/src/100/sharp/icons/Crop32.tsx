import type { SVGProps } from 'react'

export default function Crop32({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-292v-376h616v376H172Zm22-22h572v-332H194v332Zm0 0v-332 332Z" />
    </svg>
  )
}
