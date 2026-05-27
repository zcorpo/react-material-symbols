import type { SVGProps, JSX } from 'react'

export default function Shadow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-554.15h150.46V-840H840v569.54H674.15V-120H120Zm181.23-181.23h508v-508h-508v508Z" />
    </svg>
  )
}
