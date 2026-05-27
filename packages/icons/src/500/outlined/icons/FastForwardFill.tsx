import type { SVGProps, JSX } from 'react'

export default function FastForwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M88.93-228.76v-502.48L451.91-480 88.93-228.76Zm420.16 0v-502.48L872.07-480 509.09-228.76Z" />
    </svg>
  )
}
