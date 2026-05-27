import type { SVGProps } from 'react'

export default function PenSize1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M199-199q-6-6-6-14t6-14l534-534q6-6 14-6t14 6q6 6 6 14t-6 14L227-199q-6 6-14 6t-14-6Z" />
    </svg>
  )
}
