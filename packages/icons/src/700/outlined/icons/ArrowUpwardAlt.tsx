import type { SVGProps, JSX } from 'react'

export default function ArrowUpwardAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M435-220v-376L282-446l-66-67 265-265 265 265-66 66-151-151v378h-94Z" />
    </svg>
  )
}
