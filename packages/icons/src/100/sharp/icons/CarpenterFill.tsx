import type { SVGProps } from 'react'

export default function CarpenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M565-90 435-221l53-54-330-470 118-118 532 532L565-90Zm1-31 211-211-101-101-211 212 101 100Z" />
    </svg>
  )
}
