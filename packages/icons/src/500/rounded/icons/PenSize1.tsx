import type { SVGProps } from 'react'

export default function PenSize1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M196.13-196.1q-7.2-7.16-7.2-16.82 0-9.67 7.2-16.95l534-534q7.24-7.2 16.89-7.2t16.85 7.17q7.2 7.16 7.2 16.82 0 9.67-7.2 16.95l-534 534q-7.24 7.2-16.89 7.2t-16.85-7.17Z" />
    </svg>
  )
}
