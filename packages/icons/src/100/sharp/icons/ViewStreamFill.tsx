import type { SVGProps, JSX } from 'react'

export default function ViewStreamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-252v-217h616v217H172Zm0-239v-217h616v217H172Z" />
    </svg>
  )
}
