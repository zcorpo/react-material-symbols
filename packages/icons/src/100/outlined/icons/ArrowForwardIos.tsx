import type { SVGProps, JSX } from 'react'

export default function ArrowForwardIos({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m315-117-30-29 335-335-335-334 30-30 364 364-364 364Z" />
    </svg>
  )
}
