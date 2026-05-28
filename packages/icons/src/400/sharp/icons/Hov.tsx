import type { SVGProps, JSX } from 'react'

export default function Hov({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-80 240-480l240-400 240 400L480-80Zm0-117 170-283-170-283-170 283 170 283Zm0-283Z" />
    </svg>
  )
}
