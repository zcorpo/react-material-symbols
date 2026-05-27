import type { SVGProps } from 'react'

export default function RemoveFromQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M330-499.54h300v-45.38H330v45.38ZM347.31-140v-80H100v-600h760v600H612.69v80H347.31Z" />
    </svg>
  )
}
