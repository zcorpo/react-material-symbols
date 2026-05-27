import type { SVGProps, JSX } from 'react'

export default function Login({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479-172v-22h287v-572H479v-22h309v616H479Zm-5-192-17-15 90-90H172v-22h375l-90-90 16-16 117 117.5L474-364Z" />
    </svg>
  )
}
