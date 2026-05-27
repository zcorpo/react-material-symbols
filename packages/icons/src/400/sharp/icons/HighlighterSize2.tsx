import type { SVGProps, JSX } from 'react'

export default function HighlighterSize2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m282-198-84-84q-9-9-9-21.5t9-21.5l437-437q9-9 21.5-9t21.5 9l84 85q8 9 8.5 21t-8.5 21L325-198q-9 9-21.5 9t-21.5-9Z" />
    </svg>
  )
}
