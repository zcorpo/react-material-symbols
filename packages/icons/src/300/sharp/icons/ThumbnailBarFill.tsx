import type { SVGProps } from 'react'

export default function ThumbnailBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h234.61v600H100Zm280 0v-600h480v600H380Z" />
    </svg>
  )
}
