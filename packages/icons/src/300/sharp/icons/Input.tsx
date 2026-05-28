import type { SVGProps, JSX } from 'react'

export default function Input({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-195.92h45.39v150.53h669.22v-509.22H145.39v151.76H100V-780h760v600H100Zm367.08-143.77L434.46-356l100.31-100.69H100v-45.39h434.77l-100.31-100.3L467.08-635l155.61 155.62-155.61 155.61Z" />
    </svg>
  )
}
