import type { SVGProps, JSX } from 'react'

export default function ArrowDownward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440.39-814.7v517.52L201.43-536.13 145.87-480 480-145.87 814.7-480l-56.13-56.13-238.96 238.95V-814.7h-79.22Z" />
    </svg>
  )
}
