import type { SVGProps, JSX } from 'react'

export default function HexagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262-103 44-480l218-377h436l218 377-218 377H262Z" />
    </svg>
  )
}
