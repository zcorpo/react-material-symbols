import type { SVGProps, JSX } from 'react'

export default function WalletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm45.39-442.69h669.22v-111.92H145.39v111.92Zm488.46 242.3 180.76-151.92v-45H145.39v78.08l488.46 118.84Z" />
    </svg>
  )
}
