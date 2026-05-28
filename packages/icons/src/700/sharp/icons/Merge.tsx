import type { SVGProps, JSX } from 'react'

export default function Merge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m241-95-66-66 258-257v-268l-90 90-66-66 203-203 203 203-66 66-90-90v268l258 257-66 66-239-239L241-95Z" />
    </svg>
  )
}
