import type { SVGProps } from 'react'

export default function SegmentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-240v-60h480v60H360Zm0-210v-60h480v60H360ZM120-660v-60h720v60H120Z" />
    </svg>
  )
}
