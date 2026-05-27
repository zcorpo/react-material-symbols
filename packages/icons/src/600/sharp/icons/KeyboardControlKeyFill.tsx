import type { SVGProps, JSX } from 'react'

export default function KeyboardControlKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M242-424.43 186.43-480 480-773.57 773.57-480 718-424.43l-238-237-238 237Z" />
    </svg>
  )
}
