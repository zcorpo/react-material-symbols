import type { SVGProps, JSX } from 'react'

export default function Web({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm45.39-45.39h459.84v-164.53H145.39v164.53Zm505.22 0h164v-374.46h-164v374.46ZM145.39-435.31h459.84v-164.54H145.39v164.54Z" />
    </svg>
  )
}
