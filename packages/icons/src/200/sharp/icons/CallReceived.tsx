import type { SVGProps, JSX } from 'react'

export default function CallReceived({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-240v-358.31h30.77v305.54L738-760l22 22-467.23 467.23h305.54V-240H240Z" />
    </svg>
  )
}
