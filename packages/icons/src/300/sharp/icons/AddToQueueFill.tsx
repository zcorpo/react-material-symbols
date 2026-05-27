import type { SVGProps } from 'react'

export default function AddToQueueFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-370h45.38v-127.31H630v-45.38H502.69V-670h-45.38v127.31H330v45.38h127.31V-370Zm-110 230v-80H100v-600h760v600H612.69v80H347.31Z" />
    </svg>
  )
}
