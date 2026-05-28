import type { SVGProps, JSX } from 'react'

export default function DirectionsAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-106.15 106.15-480 480-853.85 853.85-480 480-106.15Zm0-203L650.85-480 480-650.85l-22.23 22.23 134 133.24H309.15v30.76h282.62l-134 133.24L480-309.15Z" />
    </svg>
  )
}
