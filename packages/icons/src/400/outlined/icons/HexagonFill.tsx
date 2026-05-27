import type { SVGProps, JSX } from 'react'

export default function HexagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272-120 64-480l208-360h416l208 360-208 360H272Z" />
    </svg>
  )
}
