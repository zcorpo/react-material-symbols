import type { SVGProps } from 'react'

export default function Stat0Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-256.92 256.92-480 480-703.08 703.08-480 480-256.92Z" />
    </svg>
  )
}
