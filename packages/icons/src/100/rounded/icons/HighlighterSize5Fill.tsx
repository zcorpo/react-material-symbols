import type { SVGProps } from 'react'

export default function HighlighterSize5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M428-88 88-428q-3-3-3-8t3-8l428-428q3-3 8-2.5t8 3.5l340 339q3 3 3 8t-3 8L444-88q-3 3-8 3t-8-3Z" />
    </svg>
  )
}
