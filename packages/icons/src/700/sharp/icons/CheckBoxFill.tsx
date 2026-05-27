import type { SVGProps, JSX } from 'react'

export default function CheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m417-302 300-302-63-64-237 238-110-110-63 64 173 174ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
