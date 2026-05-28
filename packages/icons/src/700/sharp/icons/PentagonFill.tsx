import type { SVGProps, JSX } from 'react'

export default function PentagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M227-103 59-607l421-294 421 294-168 504H227Z" />
    </svg>
  )
}
