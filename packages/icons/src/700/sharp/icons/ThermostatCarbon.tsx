import type { SVGProps } from 'react'

export default function ThermostatCarbon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-13 13-480l467-467 467 467L480-13Zm0-136 331-331-331-331-331 331 331 331Zm0-331Z" />
    </svg>
  )
}
