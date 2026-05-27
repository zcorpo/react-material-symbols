import type { SVGProps } from 'react'

export default function ArrowsMoreUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-200v-360H120v-60h420v420h-60Zm220-220v-360H340v-60h420v420h-60Z" />
    </svg>
  )
}
