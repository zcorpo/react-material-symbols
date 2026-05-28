import type { SVGProps, JSX } from 'react'

export default function MoveItemFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M759-433H332v-94h427l-90-91 67-65 203 203-203 203-67-65 90-91ZM497-587v-184H189v582h308v-184h94v278H95v-771h496v279h-94Z" />
    </svg>
  )
}
