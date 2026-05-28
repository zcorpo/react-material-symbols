import type { SVGProps, JSX } from 'react'

export default function ToastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249-249h462v-60H249v60ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
