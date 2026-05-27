import type { SVGProps, JSX } from 'react'

export default function KeyboardBackspace({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M365.54-255.46 140-480.62l225.54-225.53 32.61 32.61-170.23 170.23H820v45.39H227.92l170.23 169.84-32.61 32.62Z" />
    </svg>
  )
}
