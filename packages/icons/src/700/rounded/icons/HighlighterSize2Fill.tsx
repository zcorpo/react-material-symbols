import type { SVGProps, JSX } from 'react'

export default function HighlighterSize2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m270-186-84-84q-14-14-14-33.5t14-33.5l437-437q14-14 33.5-14t33.5 14l84 85q13 14 13.5 33T774-623L337-186q-14 14-33.5 14T270-186Z" />
    </svg>
  )
}
