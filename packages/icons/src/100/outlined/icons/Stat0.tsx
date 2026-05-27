import type { SVGProps, JSX } from 'react'

export default function Stat0({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-274 274-480l206-206 206 206-206 206Zm0-30 176-176-176-176-176 176 176 176Zm0-176Z" />
    </svg>
  )
}
