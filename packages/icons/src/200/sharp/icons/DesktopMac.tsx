import type { SVGProps, JSX } from 'react'

export default function DesktopMac({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M378.31-160v-28.85l77.07-77.3H120V-800h720v533.85H504.62l77.07 77.3V-160H378.31ZM150.77-346h658.46v-423.23H150.77V-346Zm0 0v-423.23V-346Z" />
    </svg>
  )
}
