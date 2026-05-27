import type { SVGProps, JSX } from 'react'

export default function CallEndFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M167-252-2-420l54-55q88-84 193-130t235-46q129 0 235.5 45T909-475l52 55-168 168-165-123v-170q-38-14-74.5-19t-73.5-5q-37 0-73.5 5T332-545v170L167-252Z" />
    </svg>
  )
}
