import type { SVGProps, JSX } from 'react'

export default function KeyboardControlKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m242-438-42-42 280-280 280 280-42 42-238-237-238 237Z" />
    </svg>
  )
}
