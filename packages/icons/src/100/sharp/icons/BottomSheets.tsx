import type { SVGProps } from 'react'

export default function BottomSheets({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-270h572v-324H194v324Zm0 22v226h572v-226H194Zm0 0v226-226Z" />
    </svg>
  )
}
