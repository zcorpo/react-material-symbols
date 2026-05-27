import type { SVGProps } from 'react'

export default function SpaceBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-400v-200h30.77v169.23h498.46V-600H760v200H200Z" />
    </svg>
  )
}
