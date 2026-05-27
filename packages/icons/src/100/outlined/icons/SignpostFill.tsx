import type { SVGProps, JSX } from 'react'

export default function SignpostFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-132v-169H263l-91-91 91-91h206v-83H212v-182h257v-80h22v80h206l91 91-91 91H491v83h257v182H491v169h-22Z" />
    </svg>
  )
}
