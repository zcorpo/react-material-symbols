import type { SVGProps } from 'react'

export default function DoubleArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m188-183 221-297-221-297h117l221 297-221 297H188Zm295 0 221-297-221-297h116l222 297-222 297H483Z" />
    </svg>
  )
}
