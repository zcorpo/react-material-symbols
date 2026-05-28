import type { SVGProps, JSX } from 'react'

export default function LineEndSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M437.13-257.13v-188.8H75.93v-68.14h361.2v-188.8h445.74v445.74H437.13Z" />
    </svg>
  )
}
