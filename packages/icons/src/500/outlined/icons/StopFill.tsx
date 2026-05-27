import type { SVGProps, JSX } from 'react'

export default function StopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234.02-234.02v-492.2h492.2v492.2h-492.2Z" />
    </svg>
  )
}
