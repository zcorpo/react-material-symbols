import type { SVGProps } from 'react'

export default function Stat0({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-191.39 191.39-480 480-768.61 768.61-480 480-191.39Zm0-92.72L675.89-480 480-675.89 284.11-480 480-284.11ZM480-480Z" />
    </svg>
  )
}
