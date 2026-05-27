import type { SVGProps, JSX } from 'react'

export default function DialogsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M255-251h450v-459H255v459ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
