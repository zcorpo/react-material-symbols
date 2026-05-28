import type { SVGProps, JSX } from 'react'

export default function FormatInkHighlighterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80 0v-121h800V0H80Zm57-227 120-120-38-38v-42l204-204 200 200-203 203h-43l-42-42-43 43H137Zm329-447 232-232 200 200-232 232-200-200Z" />
    </svg>
  )
}
