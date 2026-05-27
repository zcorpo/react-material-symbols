import type { SVGProps } from 'react'

export default function TransitEnterexit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M218-223v-440h129v215l299-299 98 96-299 299h213v129H218Z" />
    </svg>
  )
}
