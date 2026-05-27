import type { SVGProps } from 'react'

export default function AddBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-280h60v-170h170v-60H510v-170h-60v170H280v60h170v170ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
