import type { SVGProps, JSX } from 'react'

export default function ShiftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-140v-297.31H162.31L480-848.46l317.69 411.15H620V-140H340Z" />
    </svg>
  )
}
