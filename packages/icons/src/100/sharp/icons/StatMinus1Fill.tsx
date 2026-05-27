import type { SVGProps, JSX } from 'react'

export default function StatMinus1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-384 276-588l16-15 188 188 188-188 16 15-204 204Z" />
    </svg>
  )
}
