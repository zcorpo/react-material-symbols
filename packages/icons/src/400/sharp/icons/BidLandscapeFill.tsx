import type { SVGProps } from 'react'

export default function BidLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm660-501L530-371 353-548 180-375v85l173-173 177 177 250-250v-85Z" />
    </svg>
  )
}
