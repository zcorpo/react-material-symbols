import type { SVGProps } from 'react'

export default function HighlighterSize5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M398-58 58-398q-14-14-14-33t14-33l438-438q13-13 32.5-13t33.5 14l340 339q14 14 14 33t-14 33L464-58q-14 14-33 14t-33-14Z" />
    </svg>
  )
}
