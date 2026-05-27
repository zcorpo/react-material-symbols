import type { SVGProps } from 'react'

export default function PositionBottomLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269-292h308v-59H269v59Zm-97 120v-616h616v616H172Zm22-22h572v-572H194v572Zm0-572v572-572Z" />
    </svg>
  )
}
