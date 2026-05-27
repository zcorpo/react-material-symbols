import type { SVGProps, JSX } from 'react'

export default function VitalSignsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M84.92-464.62v-30.76h203L378.38-279l202.77-479.77 114.47 263.39h181v30.76h-203l-92-216.69-203.77 479.77-111.93-263.08h-181Z" />
    </svg>
  )
}
