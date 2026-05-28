import type { SVGProps, JSX } from 'react'

export default function Stat1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m285.85-364.15-32-32L480-622.31l226.15 226.16-32 32L480-558.69 285.85-364.15Z" />
    </svg>
  )
}
