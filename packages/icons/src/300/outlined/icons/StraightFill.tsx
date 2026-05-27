import type { SVGProps } from 'react'

export default function StraightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-140v-594.46L363.85-641l-31.62-31.23L480-820l147.77 147.77L596.15-641l-93.46-93.46V-140h-45.38Z" />
    </svg>
  )
}
