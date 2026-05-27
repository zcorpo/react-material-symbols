import type { SVGProps, JSX } from 'react'

export default function Inventory2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-100v-526.92h-40V-860h760v233.08h-40V-100H140Zm5.39-572.31h669.22v-142.3H145.39v142.3Zm222.3 235h224.62V-480H367.69v42.69Z" />
    </svg>
  )
}
