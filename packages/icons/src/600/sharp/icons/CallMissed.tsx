import type { SVGProps, JSX } from 'react'

export default function CallMissed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M482.74-252.43 185.09-550.09v198.44h-79.22v-337.79h330.22v79.79H238.22l244.52 245.08 316.83-316.82 56.13 56.56-372.96 372.4Z" />
    </svg>
  )
}
