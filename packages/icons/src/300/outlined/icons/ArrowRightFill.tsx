import type { SVGProps, JSX } from 'react'

export default function ArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M410-303.85v-352.3L586.15-480 410-303.85Z" />
    </svg>
  )
}
