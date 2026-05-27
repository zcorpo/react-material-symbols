import type { SVGProps, JSX } from 'react'

export default function HexagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M283.54-140 87.08-480l196.46-340h392.92l196.46 340-196.46 340H283.54Z" />
    </svg>
  )
}
