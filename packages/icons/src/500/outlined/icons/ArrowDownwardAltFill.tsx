import type { SVGProps, JSX } from 'react'

export default function ArrowDownwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479-234.26 232.26-481 280-529.74 445.93-366.8v-394.27h68.14v396.27L678-528.74 725.74-481 479-234.26Z" />
    </svg>
  )
}
