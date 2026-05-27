import type { SVGProps, JSX } from 'react'

export default function CheckSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-338.77 271.62-467.15l21.23-21.23L400-381.23l267.15-267.15 21.23 21.23L400-338.77Z" />
    </svg>
  )
}
