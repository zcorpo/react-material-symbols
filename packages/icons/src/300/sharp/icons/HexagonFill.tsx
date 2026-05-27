import type { SVGProps, JSX } from 'react'

export default function HexagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M277.77-130 75.54-480l202.23-350h404.46l202.23 350-202.23 350H277.77Z" />
    </svg>
  )
}
