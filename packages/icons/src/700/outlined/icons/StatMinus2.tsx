import type { SVGProps, JSX } from 'react'

export default function StatMinus2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-164 216-429l66-66 198 199 198-199 66 66-264 265Zm0-276L216-704l66-67 198 199 198-199 66 67-264 264Z" />
    </svg>
  )
}
