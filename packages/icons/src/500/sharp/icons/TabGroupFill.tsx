import type { SVGProps } from 'react'

export default function TabGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M69.72-69.72v-692.19h68.37v623.82h623.82v68.37H69.72Zm128.37-128.37v-692.19h692.19v692.19H198.09Zm323.34-444.54h300.48v-179.28H521.43v179.28Z" />
    </svg>
  )
}
