import type { SVGProps, JSX } from 'react'

export default function KeyboardControlKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249.69-458.77 228.46-480 480-731.54 731.54-480l-21.23 21.23L480-688.08 249.69-458.77Z" />
    </svg>
  )
}
