import type { SVGProps, JSX } from 'react'

export default function Close({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m252.85-230.85-22-22L458-480 230.85-707.15l22-22L480-502l227.15-227.15 22 22L502-480l227.15 227.15-22 22L480-458 252.85-230.85Z" />
    </svg>
  )
}
