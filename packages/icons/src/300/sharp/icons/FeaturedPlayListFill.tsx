import type { SVGProps } from 'react'

export default function FeaturedPlayListFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247.77-460.15h340.61v-45.39H247.77v45.39Zm0-126.7h340.61v-45.38H247.77v45.38ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
