import type { SVGProps, JSX } from 'react'

export default function DisabledByDefault({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194-194h572v-572H194v572Zm-22 22v-616h616v616H172Zm164-149 144-144 144 144 15-15-144-144 144-144-15-15-144 144-144-144-15 15 144 144-144 144 15 15ZM194-194v-572 572Z" />
    </svg>
  )
}
