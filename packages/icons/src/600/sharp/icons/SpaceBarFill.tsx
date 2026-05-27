import type { SVGProps } from 'react'

export default function SpaceBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-345.87V-600h79.22v174.91h509.82V-600h79.79v254.13H145.87Z" />
    </svg>
  )
}
