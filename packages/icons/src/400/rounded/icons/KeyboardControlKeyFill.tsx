import type { SVGProps, JSX } from 'react'

export default function KeyboardControlKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-675 263-459q-9 9-21 9t-21-9q-9-9-9-21t9-21l238-238q9-9 21-9t21 9l238 238q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-675Z" />
    </svg>
  )
}
