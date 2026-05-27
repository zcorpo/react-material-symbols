import type { SVGProps } from 'react'

export default function DirectionsAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-123 123-480l357-357 357 357-357 357Zm0-194 163-163-163-163-16 16 137 136H317v22h284L464-333l16 16Z" />
    </svg>
  )
}
