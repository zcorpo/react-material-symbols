import type { SVGProps, JSX } from 'react'

export default function Check({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m378-338.22 359.89-359.65q10.2-10.2 24.49-10.2t24.49 10.2q10.2 10.2 10.2 24.49t-10.2 24.49L402.11-264.37q-10.2 10.2-24.11 10.2t-24.11-10.2L172.37-445.89q-10.2-10.2-9.82-24.49.38-14.29 10.58-24.49t24.49-10.2q14.29 0 24.49 10.2L378-338.22Z" />
    </svg>
  )
}
