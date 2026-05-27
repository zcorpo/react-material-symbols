import type { SVGProps } from 'react'

export default function KeyboardControlKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M245.85-448.39 214.23-480 480-745.77 745.77-480l-31.62 31.61L480-681.54 245.85-448.39Z" />
    </svg>
  )
}
