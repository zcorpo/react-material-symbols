import type { SVGProps, JSX } from 'react'

export default function ServerPersonFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-132v-696h537v696H606l-36-75H391l-37 75H212Zm144-261h248v-1q0-39-39.5-51T480-457q-45 0-84.5 12T356-394v1Zm161-160q15-15 15-36.5T517-626q-15-15-37-15t-37 15q-15 15-15 36.5t15 36.5q15 15 37 15t37-15Z" />
    </svg>
  )
}
