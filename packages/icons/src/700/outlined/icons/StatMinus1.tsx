import type { SVGProps, JSX } from 'react'

export default function StatMinus1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-334 216-598l66-66 198 199 198-199 66 66-264 264Z" />
    </svg>
  )
}
