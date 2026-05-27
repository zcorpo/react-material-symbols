import type { SVGProps } from 'react'

export default function WbTwilight2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-184.62v-30.76h760v30.76H100ZM244.62-360q13.84-87 80.34-143.5T480-560q88.54 0 155.04 56.5 66.5 56.5 80.34 143.5H244.62Z" />
    </svg>
  )
}
