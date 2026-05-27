import type { SVGProps } from 'react'

export default function BidLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm594-439L536-364 370-530 194-354v32l176-176 164 164 232-246v-31Z" />
    </svg>
  )
}
