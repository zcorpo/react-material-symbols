import type { SVGProps, JSX } from 'react'

export default function FitWidthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h94v771H95Zm676 0v-771h95v771h-95ZM264-433v-94h95v94h-95Zm169 0v-94h94v94h-94Zm169 0v-94h95v94h-95Z" />
    </svg>
  )
}
