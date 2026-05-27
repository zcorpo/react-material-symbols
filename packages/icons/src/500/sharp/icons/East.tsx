import type { SVGProps } from 'react'

export default function East({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m600-193.78-47.74-47.98 204.41-204.17H74.26v-68.14h682.41L552.02-718.48 600-766.22 886.22-480 600-193.78Z" />
    </svg>
  )
}
