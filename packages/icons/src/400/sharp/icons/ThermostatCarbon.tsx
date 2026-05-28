import type { SVGProps, JSX } from 'react'

export default function ThermostatCarbon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-50 50-480l430-430 430 430L480-50Zm0-86 344-344-344-344-344 344 344 344Zm0-344Z" />
    </svg>
  )
}
