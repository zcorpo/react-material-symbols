import type { SVGProps, JSX } from 'react'

export default function StopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M225.87-225.87V-734.7H734.7v508.83H225.87Z" />
    </svg>
  )
}
