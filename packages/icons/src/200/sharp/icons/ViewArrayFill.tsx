import type { SVGProps } from 'react'

export default function ViewArrayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-480h84.62v480H160Zm149.23 0v-480h341.54v480H309.23Zm406.15 0v-480H800v480h-84.62Z" />
    </svg>
  )
}
