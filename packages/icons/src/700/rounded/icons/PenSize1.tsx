import type { SVGProps, JSX } from 'react'

export default function PenSize1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M187-186.86q-11-10.85-11-25.82 0-14.96 11-26.32l534-534q11.18-11 26.09-11T773-773.14q11 10.85 11 25.82 0 14.96-11 26.32L239-187q-11.18 11-26.09 11T187-186.86Z" />
    </svg>
  )
}
