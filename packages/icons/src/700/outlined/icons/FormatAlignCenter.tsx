import type { SVGProps, JSX } from 'react'

export default function FormatAlignCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-87h771v87H95Zm160-171v-87h451v87H255ZM95-437v-87h771v87H95Zm160-171v-87h451v87H255ZM95-779v-87h771v87H95Z" />
    </svg>
  )
}
