import type { SVGProps, JSX } from 'react'

export default function TurnSharpLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M650-120v-250H250v-356l-90 90-42-42 162-162 162 162-42 42-90-90v296h400v310h-60Z" />
    </svg>
  )
}
