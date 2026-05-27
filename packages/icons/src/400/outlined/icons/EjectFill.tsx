import type { SVGProps } from 'react'

export default function EjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-200v-60h560v60H200Zm9-152 271-408 271 408H209Z" />
    </svg>
  )
}
