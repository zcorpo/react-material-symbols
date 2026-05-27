import type { SVGProps, JSX } from 'react'

export default function LineStartSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M526.78-253.22H73.22v-453.56h453.56v187.17h362.83v79.22H526.78v187.17Z" />
    </svg>
  )
}
