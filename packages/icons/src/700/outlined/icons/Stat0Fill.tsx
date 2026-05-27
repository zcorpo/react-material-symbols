import type { SVGProps, JSX } from 'react'

export default function Stat0Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-164 164-480l316-316 316 316-316 316Z" />
    </svg>
  )
}
