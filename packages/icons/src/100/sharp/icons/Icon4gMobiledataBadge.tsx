import type { SVGProps } from 'react'

export default function Icon4gMobiledataBadge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M519-306h225v-186h-57v22h35v142H541v-304h203v-22H519v348Zm-172 0h22v-123h82v-22h-82v-203h-22v203H208v-203h-22v225h161v123ZM92-172v-616h776v616H92Zm22-22h732v-572H114v572Zm0 0v-572 572Z" />
    </svg>
  )
}
