import type { SVGProps, JSX } from 'react'

export default function KeyboardBackspace({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M358.43-228.43 105.87-481l252.56-252.57L415-677 259.18-520.61H854.7v79.22H259.18L415-285l-56.57 56.57Z" />
    </svg>
  )
}
