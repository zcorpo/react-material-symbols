import type { SVGProps } from 'react'

export default function FeaturedVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M217.08-423.38h321v-239.54h-321v239.54ZM120-200v-560h720v560H120Z" />
    </svg>
  )
}
