import type { SVGProps, JSX } from 'react'

export default function Flag2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-100v-720h600l-89.85 180.92L820-458.15H265.39V-100H220Z" />
    </svg>
  )
}
