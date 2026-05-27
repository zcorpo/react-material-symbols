import type { SVGProps } from 'react'

export default function Equal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-324.62v-70.76h560v70.76H200Zm0-240v-70.76h560v70.76H200Z" />
    </svg>
  )
}
