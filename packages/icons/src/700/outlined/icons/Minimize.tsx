import type { SVGProps, JSX } from 'react'

export default function Minimize({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223-95v-94h515v94H223Z" />
    </svg>
  )
}
