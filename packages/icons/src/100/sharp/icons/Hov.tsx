import type { SVGProps } from 'react'

export default function Hov({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-132 292-481l188-347 188 347-188 349Zm0-47 163-302-163-300-163 300 163 302Zm0-301Z" />
    </svg>
  )
}
