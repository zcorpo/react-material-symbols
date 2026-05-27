import type { SVGProps } from 'react'

export default function ArrowLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M569.61-256.82 346.43-480l223.18-223.18v446.36Z" />
    </svg>
  )
}
