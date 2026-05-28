import type { SVGProps, JSX } from 'react'

export default function ScrollableHeader({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm22-22h572v-229H194v229Zm0-251h572v-321H194v321Zm0 0v-321 321Z" />
    </svg>
  )
}
