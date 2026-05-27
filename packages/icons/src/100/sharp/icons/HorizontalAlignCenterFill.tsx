import type { SVGProps } from 'react'

export default function HorizontalAlignCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M678-356 554-480l124-124 16 16-96 97h230v22H598l96 97-16 16ZM469-212v-536h22v536h-22ZM282-356l-16-16 97-97H132v-22h231l-97-97 16-16 124 124-124 124Z" />
    </svg>
  )
}
