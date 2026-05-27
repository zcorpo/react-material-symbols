import type { SVGProps } from 'react'

export default function FormatImageBreakLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-22h616v22H172Zm0-149v-319h319v319H172Zm22-22h275v-275H194v275Zm-22-423v-22h616v22H172Zm160 286Z" />
    </svg>
  )
}
