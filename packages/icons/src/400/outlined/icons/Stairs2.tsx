import type { SVGProps } from 'react'

export default function Stairs2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-200v-60h246.5v-250H573v-250h307v60H633.5v250H387v250H80Z" />
    </svg>
  )
}
