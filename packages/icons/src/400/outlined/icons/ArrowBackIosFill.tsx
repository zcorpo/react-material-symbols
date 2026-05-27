import type { SVGProps, JSX } from 'react'

export default function ArrowBackIosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
    </svg>
  )
}
