import type { SVGProps } from 'react'

export default function AirlineSeatLegroomNormal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M660-109v-301H250v-453h255v262.4h269V-218h117v109H660ZM560-257H97v-606h83v523h380v83Z" />
    </svg>
  )
}
