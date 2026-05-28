import type { SVGProps, JSX } from 'react'

export default function Filter1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M551-379h22v-350H470v22h81v328Zm-297 99v-548h548v548H254Zm22-22h504v-504H276v504ZM158-184v-516h22v494h494v22H158Zm118-118v-504 504Z" />
    </svg>
  )
}
