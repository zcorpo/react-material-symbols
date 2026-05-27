import type { SVGProps } from 'react'

export default function GMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-306h268v-186h-78v22h56v142H368v-304h246v-22H346v348ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
