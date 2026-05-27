import type { SVGProps } from 'react'

export default function Stat0({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-164 164-480l316-316 316 316-316 316Zm0-130 186-186-186-186-186 186 186 186Zm0-186Z" />
    </svg>
  )
}
