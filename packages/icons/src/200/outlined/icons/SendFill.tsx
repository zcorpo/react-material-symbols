import type { SVGProps, JSX } from 'react'

export default function SendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-220v-208.85L385.85-480 160-532.38V-740l616.92 260L160-220Z" />
    </svg>
  )
}
