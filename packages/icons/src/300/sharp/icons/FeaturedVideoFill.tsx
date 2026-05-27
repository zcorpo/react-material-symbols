import type { SVGProps } from 'react'

export default function FeaturedVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M205.54-415.69h341v-258.77h-341v258.77ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
