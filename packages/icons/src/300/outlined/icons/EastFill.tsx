import type { SVGProps, JSX } from 'react'

export default function EastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m593.46-213.46-31.61-31.62 212.61-212.61H100v-45.39h674.85l-213-212.61 31.61-31.62 266.92 266.93-266.92 266.92Z" />
    </svg>
  )
}
