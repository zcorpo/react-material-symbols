import type { SVGProps, JSX } from 'react'

export default function FastRewindFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M889.61-213.43 503.48-480l386.13-266.57v533.14Zm-433.09 0L70.39-480l386.13-266.57v533.14Z" />
    </svg>
  )
}
