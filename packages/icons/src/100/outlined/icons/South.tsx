import type { SVGProps, JSX } from 'react'

export default function South({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-132 234-378l15-15 220 221v-657h22v656l220-221 15 16-246 246Z" />
    </svg>
  )
}
