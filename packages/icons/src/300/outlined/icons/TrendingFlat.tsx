import type { SVGProps } from 'react'

export default function TrendingFlat({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m695.46-314.46-32.61-32 109.84-110.23H140v-45.39h633.69L663.46-611.92l31.62-32L860-479.38 695.46-314.46Z" />
    </svg>
  )
}
