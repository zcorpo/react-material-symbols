import type { SVGProps } from 'react'

export default function Explicit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M388-306h184v-22H410v-140h162v-22H410v-140h162v-22H388v346ZM172-172v-616h616v616H172Zm22-22h572v-572H194v572Zm0 0v-572 572Z" />
    </svg>
  )
}
