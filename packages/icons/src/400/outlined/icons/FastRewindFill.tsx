import type { SVGProps } from 'react'

export default function FastRewindFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M854-240 508-480l346-240v480Zm-402 0L106-480l346-240v480Z" />
    </svg>
  )
}
