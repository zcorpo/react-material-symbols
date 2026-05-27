import type { SVGProps } from 'react'

export default function FastRewindFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M917-193 500-480l417-287v574Zm-457 0L43-480l417-287v574Z" />
    </svg>
  )
}
