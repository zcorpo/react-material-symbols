import type { SVGProps } from 'react'

export default function TrendingFlatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m696.35-280.65-56.57-56.13 102.61-102.61H105.87v-79.22h637.52L640.22-621.22l56.13-56.13L894.7-479 696.35-280.65Z" />
    </svg>
  )
}
