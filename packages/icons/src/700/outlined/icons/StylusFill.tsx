import type { SVGProps } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M170-101q-32 7-54-15.5T101-170l40-191 220 220-191 40Zm237-80L181-407l433-433q28-28 66.5-28t65.5 28l94 94q28 27 28 65.5T840-614L407-181Z" />
    </svg>
  )
}
