import type { SVGProps, JSX } from 'react'

export default function SkipPreviousFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M284-312v-336h22v336h-22Zm392 0L428-480l248-168v336Z" />
    </svg>
  )
}
