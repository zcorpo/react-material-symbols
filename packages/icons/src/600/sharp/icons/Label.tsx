import type { SVGProps, JSX } from 'react'

export default function Label({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7h580.22L895.7-480 647.14-145.87H65.87Zm78.65-78.65h462.52L796.96-480l-189.7-255.48H144.52v510.96ZM470.74-480Z" />
    </svg>
  )
}
