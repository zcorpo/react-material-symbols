import type { SVGProps, JSX } from 'react'

export default function ThermostatCarbon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-123 123-480l357-357 357 357-357 357Zm0-30 327-327-327-327-327 327 327 327Zm0-327Z" />
    </svg>
  )
}
