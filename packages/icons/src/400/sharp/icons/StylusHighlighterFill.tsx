import type { SVGProps, JSX } from 'react'

export default function StylusHighlighterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M281-326v-514h74l323 156v358H281ZM160-120l39-106h562l39 106H160Z" />
    </svg>
  )
}
