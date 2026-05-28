import type { SVGProps, JSX } from 'react'

export default function Start({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-240v-480h60v480H80Zm559 1-43-42 169-169H239v-60h526L597-679l42-42 241 241-241 241Z" />
    </svg>
  )
}
