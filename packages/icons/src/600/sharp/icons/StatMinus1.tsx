import type { SVGProps } from 'react'

export default function StatMinus1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-344 226.43-597.57 282-653.13l198 198.56 198-198.56 55.57 55.56L480-344Z" />
    </svg>
  )
}
