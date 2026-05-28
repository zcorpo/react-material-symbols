import type { SVGProps, JSX } from 'react'

export default function EastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m586.92-226.92-21.23-21.23 217.23-217.23H120v-30.77h663.69l-218-217.23 21.23-21.24 253.85 253.85-253.85 253.85Z" />
    </svg>
  )
}
