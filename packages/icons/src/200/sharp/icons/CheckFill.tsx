import type { SVGProps, JSX } from 'react'

export default function CheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380.31-270.62 183.23-467.69l22.23-21.46 174.85 174.84 374-374.77 22.23 22.23-396.23 396.23Z" />
    </svg>
  )
}
