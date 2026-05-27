import type { SVGProps, JSX } from 'react'

export default function PentagonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247.31-130 91.92-596.15 480-867.69l388.08 271.54L712.69-130H247.31Z" />
    </svg>
  )
}
