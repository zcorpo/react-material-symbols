import type { SVGProps } from 'react'

export default function TiltArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-140 152.31-680h455L860-140H100Zm356.92-394.31v221.23h45.39v-221.23L584-452.62l32-31.99-136.38-136L344-485.38l32 32 80.92-80.93Z" />
    </svg>
  )
}
