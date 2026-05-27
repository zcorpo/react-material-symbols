import type { SVGProps, JSX } from 'react'

export default function EMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M330-280v-400h300v45.38H375.38v131.93H630v45.38H375.38v131.93H630V-280H330Z" />
    </svg>
  )
}
