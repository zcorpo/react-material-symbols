import type { SVGProps } from 'react'

export default function ResizeWindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M799-95 96-799l65-66 705 705-67 65Zm-421 0L96-379l65-65 284 284-67 65Z" />
    </svg>
  )
}
