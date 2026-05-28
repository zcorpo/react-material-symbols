import type { SVGProps, JSX } from 'react'

export default function Colors({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M391-96 56-431l292-292-114-114 43-43 448 450L391-96Zm0-584L141-430h500L391-680Zm409 560q-34 0-57-23t-23-57q0-26 10-49.5t26-43.5l44-57 44 57q15 20 25.5 43.5T880-200q0 34-23.5 57T800-120Z" />
    </svg>
  )
}
