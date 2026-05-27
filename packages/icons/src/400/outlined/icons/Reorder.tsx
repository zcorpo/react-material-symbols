import type { SVGProps } from 'react'

export default function Reorder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-60h720v60H120Zm0-167v-60h720v60H120Zm0-166v-60h720v60H120Zm0-167v-60h720v60H120Z" />
    </svg>
  )
}
