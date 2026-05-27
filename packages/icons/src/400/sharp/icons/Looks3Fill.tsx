import type { SVGProps } from 'react'

export default function Looks3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M365-277h230v-406H365v60h170v111h-87v60h87v115H365v60ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
