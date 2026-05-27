import type { SVGProps } from 'react'

export default function HovFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-55 215-480l265-426 266 426L480-55Z" />
    </svg>
  )
}
