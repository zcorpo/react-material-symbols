import type { SVGProps } from 'react'

export default function LineEndDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-200 350-450H80v-60h270l250-250 280 280-280 280Z" />
    </svg>
  )
}
