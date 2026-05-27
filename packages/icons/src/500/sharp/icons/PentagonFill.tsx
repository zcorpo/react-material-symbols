import type { SVGProps, JSX } from 'react'

export default function PentagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M236.89-115.93 74.98-601.67 480-885.02l405.02 283.35-161.91 485.74H236.89Z" />
    </svg>
  )
}
