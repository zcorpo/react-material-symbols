import type { SVGProps, JSX } from 'react'

export default function FloatPortrait2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M289-529h263v-222H289v222ZM826-55H135v-851h691v851Zm-95-94v-662H229v662h502Zm0-662H229h502Z" />
    </svg>
  )
}
