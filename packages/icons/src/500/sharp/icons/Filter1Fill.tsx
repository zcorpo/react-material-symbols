import type { SVGProps, JSX } from 'react'

export default function Filter1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M533.63-342.07h62.87v-405H450.63v62.64h83v342.36ZM198.09-198.09v-692.19h692.19v692.19H198.09ZM69.72-69.72v-692.19h68.37v623.82h623.82v68.37H69.72Z" />
    </svg>
  )
}
