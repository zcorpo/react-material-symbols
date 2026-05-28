import type { SVGProps, JSX } from 'react'

export default function EqualFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-335v-62h536v62H212Zm0-228v-62h536v62H212Z" />
    </svg>
  )
}
