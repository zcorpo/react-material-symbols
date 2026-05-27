import type { SVGProps, JSX } from 'react'

export default function ViewStreamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-224.62h640V-240H160Zm0-255.38V-720h640v224.62H160Z" />
    </svg>
  )
}
