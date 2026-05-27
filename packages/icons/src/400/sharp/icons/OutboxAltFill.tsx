import type { SVGProps } from 'react'

export default function OutboxAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m245-261 452-221-452-221v138l192 83-192 83v138Zm452-221ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
