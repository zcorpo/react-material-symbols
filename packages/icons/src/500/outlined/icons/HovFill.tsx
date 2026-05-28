import type { SVGProps, JSX } from 'react'

export default function HovFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-74.02 234.02-480 480-886.22 726.22-480 480-74.02Z" />
    </svg>
  )
}
