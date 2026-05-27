import type { SVGProps } from 'react'

export default function LineEndDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m600-285 195-195-195-195-195 195 195 195Zm0 85L350-450H80v-60h270l250-250 280 280-280 280Zm0-280Z" />
    </svg>
  )
}
