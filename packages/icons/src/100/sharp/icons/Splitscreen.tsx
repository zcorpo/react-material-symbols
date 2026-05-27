import type { SVGProps } from 'react'

export default function Splitscreen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-543v-245h616v245H172Zm22-22h572v-201H194v201Zm-22 393v-244h616v244H172Zm22-22h572v-200H194v200Zm0-371v-201 201Zm0 371v-200 200Z" />
    </svg>
  )
}
