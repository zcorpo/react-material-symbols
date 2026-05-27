import type { SVGProps } from 'react'

export default function TabCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m460.07-412.33 84-84 84 84 47.97-47.74-84-84 84-84-47.97-47.97-84 84-84-84-47.74 47.97 84 84-84 84 47.74 47.74ZM198.09-198.09v-692.19h692.19v692.19H198.09ZM69.72-69.72v-692.19h68.37v623.82h623.82v68.37H69.72Z" />
    </svg>
  )
}
