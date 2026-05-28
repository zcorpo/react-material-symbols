import type { SVGProps, JSX } from 'react'

export default function LineEndSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M503.08-323.08v-141.54h-380v-30.76h380v-141.54h313.84v313.84H503.08Z" />
    </svg>
  )
}
