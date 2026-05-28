import type { SVGProps, JSX } from 'react'

export default function TabGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M158-184v-516h22v494h494v22H158Zm96-96v-548h548v548H254Zm280-410h246v-116H534v116Z" />
    </svg>
  )
}
