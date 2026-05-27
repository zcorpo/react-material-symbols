import type { SVGProps } from 'react'

export default function OutboxAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247.15-262.2 697-482 247.15-702.04v136.32L437-482l-189.85 83.48v136.32ZM697-482ZM114.02-114.02v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}
