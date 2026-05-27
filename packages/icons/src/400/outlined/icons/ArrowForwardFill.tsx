import type { SVGProps, JSX } from 'react'

export default function ArrowForwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
    </svg>
  )
}
