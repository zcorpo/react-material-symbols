import type { SVGProps, JSX } from 'react'

export default function HighlighterSize4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m366.85-140.85-226-226q-5.16-5.15-5.16-11.5 0-6.34 5.16-11.5l429.3-429.3q4.39-4.39 11-4.39 6.62 0 11 4.39l227 226q5.16 5.15 5.16 11.5 0 6.34-5.16 11.5l-429.3 429.3q-5.16 5.16-11.5 5.16-6.35 0-11.5-5.16Z" />
    </svg>
  )
}
