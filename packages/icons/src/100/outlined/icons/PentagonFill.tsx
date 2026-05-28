import type { SVGProps, JSX } from 'react'

export default function PentagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M259-146 111-590l369-258 369 258-148 444H259Z" />
    </svg>
  )
}
