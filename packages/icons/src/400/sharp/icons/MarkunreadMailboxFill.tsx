import type { SVGProps, JSX } from 'react'

export default function MarkunreadMailboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-545h160v-255h300v160H300v303h60v-208h520v545H80Z" />
    </svg>
  )
}
